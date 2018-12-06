import React from 'react';
import ListItem from './ListItem.js';

function List() {
    return (
        <div className="todo-list">
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
        </div>
    );
  }

export default List