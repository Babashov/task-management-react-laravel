import React from 'react';

const TaskItemComponent = ({title,task,id}) => {
    const drag = e =>{
        e.dataTransfer.setData("text", e.target.id);
    }

    return (
            <div className="taskItem" id={id} draggable="true" onDragStart={(e)=>drag(e)}>
                <div className="taskItemHeader" >
                     {title}
                 </div>
                <div className="taskItemContent">
                    {task}
                </div>
            </div>
    );
}

export default TaskItemComponent;
