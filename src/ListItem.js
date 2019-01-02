import React from 'react';


function ListItem(props) {
    return ( 
        <div className="todo-item">
            <input 
                type="checkbox"
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}  />
            <label for={props.id}>{props.item.text}</label>
        </div>
    );
  }

export default ListItem