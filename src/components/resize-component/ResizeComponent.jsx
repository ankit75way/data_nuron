import React from "react";
import { Resizable } from "re-resizable";
import ResizableHoc from "../../hoc-components/ResizableHoc";
import "./resize.css";
const ResizeComponent = (props) => {
    let { handleResizeComponent, handleUpdateComponent } = props
    let Component = props.Component;
    const updateComponent = (oldPayload,width,height) => {
        console.log(oldPayload,width,height)
        let newPayload = oldPayload
        oldPayload.width = width
        oldPayload.height = height
        handleUpdateComponent(newPayload)
    }
  return (
    <>
      <Resizable
        size={{ width: props.width, height: props.height }}
        onResizeStop={(e, direction, ref, d) => {
            console.log(props.width , d.width)
            let newWidth =  Number(props.width) + Number(d.width);
            let newHeight = (Number(props.height) +   Number(d.height))
            console.log(newWidth)
            updateComponent(props.componentData,newWidth,newHeight)
          handleResizeComponent({
            width:newWidth,
            height:newHeight
          })
        }}
        className="panels"
      >
        {Component && Component}
      </Resizable>
    </>
  );
};

export default ResizableHoc(ResizeComponent);
