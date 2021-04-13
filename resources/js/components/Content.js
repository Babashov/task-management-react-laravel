import React,{useState} from 'react';
import TaskListHeader from './TaskListHeader';
import TaskListComponents from './TaskListComponents';
import TaskItemComponent from './TaskItemComponent';
const Content = () => {
    const [stageTitle,setTitle] = useState(
        'task title is esxist'
    );
    const [stageTask,setStageTask] = useState(
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsa fuga voluptate libero, et, a quam voluptates consectetur eaque nostrum hic laudantium! Dicta dolores numquam fugit unde animi tempora obcaecati!'
    );
    return (
        <main>
            <div className="container-fluid liderBoard px-3">
                <div className="row">
                    <div className="taskBoardHeader py-3 px-4">
                        Task board
                    </div>
                </div>
                <div className="" style={{width:(6*340+(6*(14*2))+16)}}>
                    <div className="boardArea">
                        <div className="taskBoard">
                            <TaskListHeader 
                            title='Unspecified stage' 
                            count={2}
                            icon={<i className="fas fa-plus"></i>}
                            />
                            <TaskListComponents>
                                <TaskItemComponent id="id1" title={stageTitle} task={stageTask}/>
                                <TaskItemComponent id="id2" title={stageTitle} task={stageTask}/>
                                <TaskItemComponent id="id3" title={stageTitle} task={stageTask}/>
                            </TaskListComponents>
                        </div>
                    </div>
                    <div className="boardArea">
                        <div className="taskBoard">
                            <TaskListHeader 
                            title='Has not started' 
                            count={0}
                            icon={<i className="fas fa-plus"></i>}
                            />
                            <TaskListComponents>
                                <TaskItemComponent id="id4" title={stageTitle} task={stageTask}/>
                                <TaskItemComponent id="id5" title={stageTitle} task={stageTask}/>
                                <TaskItemComponent id="id6" title={stageTitle} task={stageTask}/>
                                <TaskItemComponent id="id7" title={stageTitle} task={stageTask}/>
                                <TaskItemComponent id="id8" title={stageTitle} task={stageTask}/>
                            </TaskListComponents>
                        </div>
                    </div>
                    <div className="boardArea">
                        <div className="taskBoard">
                            <TaskListHeader 
                            title='Processing' 
                            count={3}
                            icon={<i className="fas fa-plus"></i>}
                            />
                            <TaskListComponents>
                                <TaskItemComponent id="id9" title={stageTitle} task={stageTask}/>
                                <TaskItemComponent id="id10" title={stageTitle} task={stageTask}/>
                                <TaskItemComponent id="id11" title={stageTitle} task={stageTask}/>
                                <TaskItemComponent id="id12" title={stageTitle} task={stageTask}/>
                                <TaskItemComponent id="id13" title={stageTitle} task={stageTask}/>
                                <TaskItemComponent id="id14" title={stageTitle} task={stageTask}/>
                            </TaskListComponents>
                        </div>
                    </div>
                    <div className="boardArea">
                        <div className="taskBoard">
                            <TaskListHeader 
                            title='Complete' 
                            count={3}
                            icon={<i className="fas fa-plus"></i>}
                            />
                            <TaskListComponents>
                                <TaskItemComponent id="id15" title={stageTitle} task={stageTask}/>
                                <TaskItemComponent id="id16" title={stageTitle} task={stageTask}/>
                                <TaskItemComponent id="id17" title={stageTitle} task={stageTask}/>
                                <TaskItemComponent id="id18" title={stageTitle} task={stageTask}/>
                                <TaskItemComponent id="id19" title={stageTitle} task={stageTask}/>
                                <TaskItemComponent id="id20" title={stageTitle} task={stageTask}/>
                                <TaskItemComponent id="id21" title={stageTitle} task={stageTask}/>   
                                <TaskItemComponent id="id22" title={stageTitle} task={stageTask}/>
                                <TaskItemComponent id="id23" title={stageTitle} task={stageTask}/>
                            </TaskListComponents>
                            
                        </div>
                    </div>
                    <div className="boardArea">
                        <div className="taskBoard">
                            <TaskListHeader 
                            title='Processing' 
                            count={3}
                            icon={<i className="fas fa-plus"></i>}
                            />
                            <TaskListComponents>
                                <TaskItemComponent id="id4259" title={stageTitle} task={stageTask}/>
                                <TaskItemComponent id="id14250" title={stageTitle} task={stageTask}/>
                                <TaskItemComponent id="id4511" title={stageTitle} task={stageTask}/>
                                <TaskItemComponent id="id14252" title={stageTitle} task={stageTask}/>
                                <TaskItemComponent id="id14253" title={stageTitle} task={stageTask}/>
                                <TaskItemComponent id="id14254" title={stageTitle} task={stageTask}/>
                            </TaskListComponents>
                        </div>
                    </div>
                    <div className="boardArea">
                        <div className="taskBoard">
                            <TaskListHeader 
                            title='Processing' 
                            count={3}
                            icon={<i className="fas fa-plus"></i>}
                            />
                            <TaskListComponents>
                                <TaskItemComponent id="id13419" title={stageTitle} task={stageTask}/>
                                <TaskItemComponent id="id1134150" title={stageTitle} task={stageTask}/>
                                <TaskItemComponent id="id115511" title={stageTitle} task={stageTask}/>
                                <TaskItemComponent id="id115132" title={stageTitle} task={stageTask}/>
                                <TaskItemComponent id="id113513" title={stageTitle} task={stageTask}/>
                                <TaskItemComponent id="id1315134" title={stageTitle} task={stageTask}/>
                            </TaskListComponents>
                        </div>
                    </div>
                    
                </div>
            </div>
        </main>
    );
}

export default Content;
