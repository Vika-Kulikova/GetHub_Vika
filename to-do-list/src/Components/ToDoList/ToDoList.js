import React from 'react';

import "./ToDoList.css"
import ToDoTaskCreator from "./ToDoTaskCreator";
import TodoListFooter from "./TodoListFooter";
import ToDoTasksList from "./ToDoTasksList";

class ToDoList extends React.Component {
    constructor() {
        super();
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


    createNewTask(task) {
        this.setState({
            tasks: [...this.state.tasks, task]
        });
    }


    deleteTask(taskId) {
        const newTaskList = this.state.tasks.filter((t) => {
            return t.id !== taskId;
        });
        this.setState({
            tasks: newTaskList
        });
    }

    updateTask(task) {
        const newTaskList = [...this.state.tasks];

        newTaskList.forEach((t) => {
            if (t.id === task.id) {
                t.isDone = task.isDone;
                return;
            }
        });


        this.setState({
            tasks: newTaskList
        });
    }

    render() {
        return (
            <div className="to-do-list">
                <ToDoTaskCreator onCreate={this.createNewTask.bind(this)}/>
                <ToDoTasksList tasks={this.state.tasks}
                               onDelete={this.deleteTask.bind(this)}
                               onUpdate={this.updateTask.bind(this)}/>
                <TodoListFooter/>
            </div>
        );
    }
}

export default ToDoList;