import React, { Component } from 'react';

import TodoItem from './TodoItem';

class TodoItemlist extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todo !== nextProps.todo;
    }
    render() {
        const {
            todo, handleToggle, handleRemove
        } = this.props;
        const TodoList = todo.map((todo) => (
            <TodoItem
                {...todo}
                key={todo.id}
                onToggle={handleToggle}
                onRemove={handleRemove}
            />
        )
    );
        return(
            <div className='to-dos'>
               <ul className='to-do-list'>
                   {TodoList}
               </ul>
            </div>
        );
    }
}

export default TodoItemlist;
