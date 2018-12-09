import React from 'react';


function ListItem(props) {
    return (
        
        <div className="todo-item">
            <input type="checkbox" id={props.id} checked={props.item.completed} />
            <label for={props.id}>{props.item.text}</label>
        </div>
    );
  }

export default ListItem