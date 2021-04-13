import React from 'react';

const TaskListHeader = ({title,count,icon}) => {
    return (
        <ul className="taskListHeader" draggable="false">
            <li className="taskListName mr-auto">
                {title} <span className="listItemCount">{count}</span>
            </li>
            <li className="addNewTask">
                {icon}
            </li>
        </ul>
    );
}

export default TaskListHeader;
