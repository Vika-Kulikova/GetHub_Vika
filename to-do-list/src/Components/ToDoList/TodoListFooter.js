import React from 'react';

class TodoListFooter extends React.Component {
    render() {
        return (
            <div className="to-do-list-footer">
                <span className="qt"> 5 items</span>
                <div className="buttons">
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        )
    }
}

export default TodoListFooter; 