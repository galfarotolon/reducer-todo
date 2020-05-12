

import React, { useState, useReducer } from "react";
import { reducer, initialState } from '../reducers/reducers'
import '../App.css'




function TodoForm() {

    const [state, dispatch] = useReducer(reducer, initialState);



    const handleChanges = e => {
        dispatch({ type: 'UPDATE_TEXT', payload: e.target.value });
    };









    console.log(state.list)

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                dispatch({ type: "ADD_TODO", payload: e.target.value })
            }}>




                {/* {state.map(task =>
                <div key={task.id}
                    onClick={() => dispatch({ type: 'TOGGLE_COMPLETED', payload: task.id })}></div>)} */}

                <input
                    onChange={handleChanges}
                    placeholder="New Task..."
                    type="text"
                    name="newItem"
                    value={state.newTask}

                />

                <button > Add</button >
                <br />

            </form >



            <button onClick={() => {
                dispatch({ type: "REMOVE_COMPLETED" })
            }} > Clear Completed</button>



            {state.list.map(item => {
                return <h3 className={`item${item.completed ? ' purchased' : ''}`}
                    onClick={() => {
                        dispatch({ type: "TOGGLE_COMPLETED", payload: item.id })
                    }}>{item.item}</h3>
            })}


            {/* 
            <div>
                {state.list.map(item => {
                    return <h3>{item.item}</h3>
                })}
            </div> */}




        </div>





    )
}

export default TodoForm;