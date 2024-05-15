import React, { useState } from 'react'
import "./box.css"
const Box = ({content="hello world",componentData,handleUpdateComponent, handleDeleteComponent}) => {
    const [isEdit , setIsEdit] = useState(false)
    const [inputValue, setInputValue] = useState(content);
    const handleUpdate = () => {
        let payload = componentData
        payload.component_name = inputValue
        handleUpdateComponent(payload)
        setIsEdit(false)
    }

  return (
    <div  className='box-container'>
        <span   className='desc'>double click to edit  the component name</span>
        {
            isEdit ? <input className='inputBox' onBlur={handleUpdate} onKeyUp={(event)=>event.key === 'Enter' && handleUpdate()}  onChange={(event)=>setInputValue(event.target.value)} value={inputValue}  type='text'/> : <h1  onDoubleClick={() => setIsEdit(!isEdit)} >{content}</h1>
        }

<span class="material-symbols-outlined icon" onClick={()=>handleDeleteComponent(componentData._id)}>
close
</span>
    </div>
  )
}

export default Box
