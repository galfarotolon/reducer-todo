import React from "react";

export const initialState = {
    newTask: '',
    list: [{

        item: 'Learn about reducers',
        completed: false,
        id: 3892987589,

    }

    ]
};




export const reducer = (state, action) => {


    switch (action.type) {
        case "ADD_TODO":


            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        item: state.newTask,
                        completed: false,
                        id: Date.now(),
                    }
                ],
                newTask: ''
            }

        case "TOGGLE_COMPLETED":

            return {

                ...state,
                list: state.list.map(task => {
                    if (task.id === action.payload) {
                        return {

                            ...task,

                            completed: !task.completed,


                        }
                    }
                    return task;
                })

            }

        case "REMOVE_COMPLETED":

            return {

                ...state,
                list: state.list.filter((item) => !item.completed)

            }

        case 'UPDATE_TEXT':

            return {
                ...state,
                newTask: action.payload
            }


        default:
            return state;
    }

}



