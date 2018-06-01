import React, { Component } from 'react';

import './css/AppTemplete.css';

class AppTemplete extends Component {
    render() {
        const { form, list } = this.props;
        return(
            <main className='todo-list-templete'>
                <div className='title'>
                    Nods To-Do
                 </div>
                <div className='sendform'>
                {form}
                 </div>
                {list}
            </main>
        );
    }
}

export default AppTemplete;