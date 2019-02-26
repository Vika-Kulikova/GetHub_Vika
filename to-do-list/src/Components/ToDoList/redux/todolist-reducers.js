import {types} from "./todolist-actions";

export function todolistReducer(oldState, action) {
    switch (action.type) {

        case types.CHANGE_FILTER:
            return {
                ...oldState,
                filter: action.value
            };

        case types.CREATE_NEW_TASK:
            return {
                ...oldState,
                tasks: [...oldState.tasks, action.task]
            };

        case types.CLEAR_COMPLETED:
            // let newState={...oldState};
            // newState.tasks = newStatetasks.tasks.filter(t => !t.isDone);
            // return newState;
            return {
                ...oldState,
                tasks: oldState.tasks.filter(t => !t.isDone)
            };

        case types.DELETE_TASK:
            // const newTaskList = this.state.tasks.filter((t) => {
            //     return t.id !== taskId;
            // });

            return {
                ...oldState,
                tasks: oldState.tasks.filter(t => {
                    return t.id !== action.id;
                })
            };

        case types.UPDATE_TASK:
            // const newTaskList = [...oldState.tasks];
            //
            // newTaskList.forEach((t) => {
            //     if (t.id === action.task.id) {
            //         t.isDone = action.task.isDone;
            //         return;
            //     }
            // });
            return {
                ...oldState,
                task: oldState.tasks.forEach((t) => {
                    if (t.id === action.task.id) {
                        t.isDone = action.task.isDone;
                        return;
                    }
                })

            };

        default:
            if (!!oldState) {
                return oldState;
            } else {
                return {
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
                }
            }
    }
}