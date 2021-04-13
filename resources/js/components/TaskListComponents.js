import React from 'react';

const TaskListComponents = ({children}) => {
    const allowDrop = (e)=>{
        e.preventDefault()
    }

    const drop = e => {
        
        e.preventDefault();
        var data = e.dataTransfer.getData("text");
        if(data.startsWith('id')){
            if(e.target.className === 'taskItem'){
                e.target.parentElement.appendChild(document.getElementById(data));
            }else if(e.target.className === 'taskList'){
                console.log("əerr2")
    
                e.target.appendChild(document.getElementById(data));
            }else if(e.target.className === 'taskItemHeader' || e.target.className === 'taskItemContent'){
                console.log("əerr3d")
                e.target.parentElement.parentElement.appendChild(document.getElementById(data));
            }
        }else{
            alert(" You can't move this element, please choose only tasks")
        }
        
    }

    return (
        <div className="taskList" draggable="false"  onDragOver={(e)=>allowDrop(e)} onDrop={(e)=>drop(e)} >
            {children}
        </div>
    );
}

export default TaskListComponents;
