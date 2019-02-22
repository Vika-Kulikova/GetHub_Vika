export function TodolistReduser(oldState = {
    // tasks: [
    //     {
    //         id: 0,
    //         title: "task 1",
    //         isDone: false
    //     },
    //     {
    //         id: 1,
    //         title: "task 2",
    //         isDone: false
    //     }
    // ]
}, action) {
    switch (action.type) {
        case "CERATE_NEW_tASK":
            return {
                ...oldState,
                tasks: [...oldState.tasks,
                    {
                        id: action.id,
                        title: action.title,
                        isDone: action.isDone
                    }]
            }
        default:
            return oldState;
    }
}