import React from 'react';

class Task extends React.Component {
    constructor(props) {
        super();
        this.state = {
            task: props.task,

        };
        this.parentDeleteCallback = props.deleteCallback;
    }

    deleteTask(e) {
        this.parentDeleteCallback(this.state.task.id);
    }

    toggleTaskStatus(e) {
        let newTask = {
            ...this.state.task,
            isDone: !this.state.task.isDone
        };


        this.setState({
            task: newTask
        });
        // this.state.isDone = !this.state.isDone;
        this.forceUpdate();
    }


    render() {
        return (
            <div className={!this.state.task.isDone ? 'task' : 'task done'}>
                <input type="checkbox" checked={ this.state.task.isDone } onClick={this.toggleTaskStatus.bind(this)}/>
                <span className="task-description">{this.state.task.title}</span>
                <span className="delete-task" onClick={this.deleteTask.bind(this)}>x</span>
            </div>

        );
    }
}

export default Task;