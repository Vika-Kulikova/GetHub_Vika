import React from 'react';

class Task extends React.Component {
    constructor(props) {
        super(props);

        this.parentDeleteCallback = props.deleteCallback;
        this.parentUpdateCallback = props.updateCallback;
    }

    deleteTask(e) {
        this.parentDeleteCallback(this.props.task.id);
    }

    toggleTaskStatus(e) {
        let task = {...this.props.task};

        task.isDone = !task.isDone;

        this.parentUpdateCallback(task);
    }


    render() {
        return (
            <div className={!this.props.task.isDone ? 'task' : 'task done'}>
                <input type="checkbox"
                       defaultChecked={this.props.task.isDone}
                       onClick={this.toggleTaskStatus.bind(this)}/>
                {this.props.task.title}
                <span className="delete-task" onClick={this.deleteTask.bind(this)}>x</span>
            </div>

        );
    }
}

export default Task;