import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        const { id, text, onToggle, onRemove, checked } = this.props;
        return(
            <li className='to-do-element' onClick={() => onToggle(id)}>
                <div className='to-do-item'>
                    <div className={(checked) ? 'to-do-text checked' : 'to-do-text'  }>{text}</div>
                         <div className='to-do-remove' onClick={(e) => {
                             e.stopPropagation();
                             onRemove(id);
                         }}>&times;</div>
                    </div>
            </li>
        );
    }
}

export default TodoItem;