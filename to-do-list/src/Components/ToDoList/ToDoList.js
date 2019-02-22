import React from 'react';
import {createStore} from 'redux '
import "./ToDoList.css"
import Task from "./Task";
import {TodolistReduser} from "redux/todolist-redusers.js"
import {createNewTaskAction} from  "redux/todolist-actions"

class ToDoList extends React.Component {
    constructor(props) {
        super();
        this.store = createStore(TodolistReduser);
        let state = this.store.getState();

        this.state = state;
    }


    createNewTask(e) {
        if (e.key === 'Enter') {
            this.store.dispatch(createNewTaskAction)
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
                <div className="header-list">
                    <input type="text" onKeyPress={this.createNewTask.bind(this)}/>
                </div>
                <div className="tasks">
                    {
                        this.state.tasks.map((item, index) => {
                            return <Task task={item} deleteCallback={this.deleteTask.bind(this)} key={item.id}/>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ToDoList;