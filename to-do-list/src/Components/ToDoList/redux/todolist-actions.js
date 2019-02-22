export const createNewTaskAction = {
    type: "CERATE_NEW_tASK",
    id: 1,
    title: "task 2",
    isDone: false
};

export createNewTaskCreatorAction = () => {
    return {
        type:
            "CERATE_NEW_tASK",
        id:
            1,
        title:
            "task 2",
        isDone:
            false
    }
};
