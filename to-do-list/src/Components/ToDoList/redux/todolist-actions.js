export const types = {
    CHANGE_FILTER: "CHANGE_FILTER",
    CREATE_NEW_TASK: "CREATE_NEW_TASK",
    DELETE_TASK: "DELETE_TASK",
    PUT_TASKS: "PUT_TASKS",
    CLEAR_COMPLETED: "CLEAR_COMPLETED",
    UPDATE_TASK: "UPDATE_TASK"
};


export const createNewTask = (task) => {
    return {
        type: types.CREATE_NEW_TASK,
        task: task
    }
};

export const deleteTask = (taskId) => {
    return {
        type: types.DELETE_TASK,
        id: taskId
    }
};

export const clearCompleted = () => {
    return {
        type: types.CLEAR_COMPLETED
    }
};

export const changeFilter = (newFilterValue) => {
    return {
        type: types.CHANGE_FILTER,
        value: newFilterValue
    }
};

export const updateTask = (task) => {
    return {
        type: types.UPDATE_TASK,
        task: task
    }
};
