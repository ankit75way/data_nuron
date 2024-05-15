import React, { useState } from "react";
import "./create.css";
import { createComponent } from "../../service/Apis";
const CreateComponents = ({ getComponentsData }) => {
  const [componentData, setComponentData] = useState({
    component_name: "test",
    height: 300,
    width: 300,
  });

  const handleCollectValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    if (["height", "width"].includes(name)) {
      if (!isNaN(Number(value))) {
        setComponentData((state) => ({
          ...state,
          [name]: Number(value),
        }));
      }
    } else {
      setComponentData((state) => ({
        ...state,
        [name]: value,
      }));
    }
  };

  const handleCreateComponent = () => {
    createComponent(componentData).then((res) => {
      getComponentsData();
    });
  };

  return (
    <div className="create-main-class">
      <h1>Create Component</h1>
      <div className="input-box-container">
        <div>
          <span>Name :</span>{" "}
          <input
            name="component_name"
            onChange={handleCollectValue}
            value={componentData.component_name}
            type="text"
            className="inputBox"
          />
        </div>
        <div>
          <span>Width :</span>{" "}
          <input
            name="width"
            onChange={handleCollectValue}
            value={componentData.width}
            type="text"
            className="inputBox"
          />{" "}
          PX
        </div>
        <div>
          <span>Height :</span>{" "}
          <input
            name="height"
            onChange={handleCollectValue}
            value={componentData.height}
            type="text"
            className="inputBox"
          />{" "}
          PX
        </div>
        <div>
          <button onClick={handleCreateComponent}>Create</button>
        </div>
      </div>
    </div>
  );
};

export default CreateComponents;
