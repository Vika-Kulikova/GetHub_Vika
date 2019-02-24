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
            ],
            filter: "all"
        };
    }

    clearCompleted() {
        this.setState({
            tasks: this.state.tasks.filter(t => !t.isDone)
        })
    }

    changeFilter(filterValue) {
        this.setState({filter: filterValue});
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
        let {tasks, filter} = this.state;
        let filterTasks = [];
        if (filter === 'all') {
            filterTasks = tasks;
        } else if (filter === 'active') {
            filterTasks = tasks.filter(t => !t.isDone);
        } else if (filter === 'completed') {
            filterTasks = tasks.filter(t => t.isDone);
        }
        return (
            <div className="to-do-list">
                <ToDoTaskCreator onCreate={this.createNewTask.bind(this)}/>
                <ToDoTasksList tasks={filterTasks}
                               onDelete={this.deleteTask.bind(this)}
                               onUpdate={this.updateTask.bind(this)}/>
                <TodoListFooter tasks={tasks} filter={filter}
                                onFilterChanged={this.changeFilter.bind(this)}
                                onClearCompleted={this.clearCompleted.bind(this)}/>
            </div>
        );
    }
}

export default ToDoList;