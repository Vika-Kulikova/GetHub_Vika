import React from 'react';
import {createStore} from "redux";

import "./ToDoList.css"
import ToDoTaskCreator from "./ToDoTaskCreator";
import TodoListFooter from "./TodoListFooter";
import ToDoTasksList from "./ToDoTasksList";

import {todolistReducer} from "./redux/todolist-reducers"
import {clearCompleted} from "./redux/todolist-actions";
import {changeFilter} from "./redux/todolist-actions";
import {createNewTask} from "./redux/todolist-actions";
import {deleteTask} from "./redux/todolist-actions";
import {updateTask} from "./redux/todolist-actions";

class ToDoList extends React.Component {
    constructor() {
        super();

        this.store = createStore(todolistReducer);
        let stateFromRedux = this.store.getState();
        this.state = stateFromRedux;
        this.store.subscribe(() => {
            let state = this.store.getState();
            this.setState(state);
        });
    }


    clearCompleted() {
        this.store.dispatch(clearCompleted());
    }

    changeFilter(filterValue) {
        this.store.dispatch(changeFilter(filterValue));
    }

    createNewTask(task) {
        this.store.dispatch(createNewTask(task));
    }

    deleteTask(taskId) {
        this.store.dispatch(deleteTask(taskId));
    }

    updateTask(task) {
        this.store.dispatch(updateTask(task));
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