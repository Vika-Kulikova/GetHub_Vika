import React from 'react';

class TodoListFooter extends React.Component {
    handleFilterChanged(e) {
        this.props.onFilterChanged(e.currentTarget.dataset.value);
    }


    render() {
        let {task, filter, onClearCompleted} = this.props;
        return (
            <div className="to-do-list-footer">
                <span className="qt"> {this.props.tasks.filter((t) => !t.isDone).length} items</span>
                <div className="buttons">
                    <button className={filter === 'all' ? 'selected' : ''}
                            data-value="all"
                            onClick={this.handleFilterChanged.bind(this)}>All
                    </button>
                    <button className={filter === 'active' ? 'selected' : ''}
                            data-value="active"
                            onClick={this.handleFilterChanged.bind(this)}>Active
                    </button>
                    <button className={filter === 'completed' ? 'selected' : ''}
                            data-value="completed"
                            onClick={this.handleFilterChanged.bind(this)}>Completed
                    </button>
                    <button onClick={onClearCompleted}>Clear completed</button>
                </div>
            </div>
        )
    }
}

export default TodoListFooter; 