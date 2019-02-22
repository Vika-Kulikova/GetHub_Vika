import React from 'react';

import "./ToDoList.css"
import Task from "./Task";


class ToDoTasksList extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (

            <div className="tasks">
                {
                    this.props.tasks.map((task, index) => {
                        return <Task task={task}
                                     updateCallback={this.props.onUpdate}
                                     deleteCallback={this.props.onDelete}
                                     key={task.id}/>
                    })
                }
            </div>
        );
    }
}

export default ToDoTasksList;