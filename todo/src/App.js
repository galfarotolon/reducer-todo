import React, { useState, useReducer } from "react";
import './App.css';
import { reducer, initialState } from './reducers/reducers'
import TodoForm from './Components/TodoForm'




function App() {


  return (
    <div className="App">
      <h1>To Do List</h1>

      <TodoForm />




    </div>


  );
}

export default App;
