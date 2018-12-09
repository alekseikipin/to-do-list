import React from 'react';
import ListItem from './ListItem.js';
import todosData from "./todosData.js"

function App() {

    const todos = todosData.map( item => <ListItem key={item.id} item={item} id={item.id}/> ) 

    return (
        <div className="todo-list">
            {todos}
        </div>
    );
  }

export default App