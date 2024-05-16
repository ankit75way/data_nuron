import React from "react";
import "./dashboard.css";
import ResizeComponent from "./resize-component/ResizeComponent";
import Box from "./box-component/Box";

const Dashboard = ({ components, handleUpdateComponent, handleDeleteComponent }) => {
  return (
    <>
      <div className="divvvv">
        {components.map((element) => (
          <ResizeComponent
            handleUpdateComponent={handleUpdateComponent}
            componentData={element}
            Component={<Box handleDeleteComponent={handleDeleteComponent}  componentData={element} handleUpdateComponent={handleUpdateComponent}  content={element.component_name} />}
          />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
