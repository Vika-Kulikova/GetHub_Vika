import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import ToDoList from "./Components/ToDoList/ToDoList";


ReactDOM.render(
    <div>
        < App />
        < ToDoList />
    </div>,

    document.getElementById('root')
);