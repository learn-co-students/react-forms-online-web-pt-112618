// Code ControlledInput Component Here
import React from 'react';

class ControlledInput extends React.Component {
    state = {
        value: 'Irfan',
    }

    handleChange = event => {
        this.setState({
            value: event.target.value,
        }, () => console.log(this.state.value));
    }
    
    render() {
        return (
            <form onSubmit={event => this.handleSubmit(event)}>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
            </form>
        );
    }
}

export default ControlledInput;