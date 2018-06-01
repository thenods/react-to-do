import React, { Component } from 'react';

class Form extends Component {
    render() {
        const { handleChange, handleCreate } = this.props;
        return(
            <form onSubmit={handleCreate}>
                <input
                className='appendInput'
                onChange={handleChange}
                />
                <button>추가</button>
            </form>
        )
    }
}



export default Form;