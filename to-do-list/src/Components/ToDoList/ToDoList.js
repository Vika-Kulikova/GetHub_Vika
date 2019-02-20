import React from 'react';

import "./ToDoList.css"
import Task from "./Task";

class ToDoList extends React.Component {
    constructor(props) {
        super();
        this.newId = 2;
        this.state = {
            tasks: [
                {
                    id: 0,
                    title: "task 1",
                    isDone: false
                },
                {
                    id: 1,
                    title: "task 2",
                    isDone: false
                }
            ]
        };
    }


    createNewTask(e) {
        if (e.key === 'Enter') {
            this.setState({
                tasks: [
                    ...this.state.tasks,
                    {
                        title: e.currentTarget.value,
                        isDone: false,
                        id: this.newId
                    }
                ]
            });
            e.currentTarget.value = '';
            this.newId++
        }
    }

    deleteTask(itemId, e) {
        const newTaskList = this.state.tasks.filter((t) => {
            return t.id !== itemId;
        });
            this.setState({
            tasks: newTaskList
        });
    }

    render() {
        return (
            <div className="to-do-list">
                <div className="header">
                    <input type="text" onKeyPress={this.createNewTask.bind(this)}/>
                </div>
                <div className="tasks">
                    {
                        this.state.tasks.map((item, index) => {
                            return <Task task={item} deleteCallback={this.deleteTask.bind(this)} key={item.id} />
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ToDoList;