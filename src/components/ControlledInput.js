// Code ControlledInput Component Here
import React from 'react';

class ControlledInput extends React.Component {
    state = {
        firstName: "",
        lastName: ""
    }

    handleFirstNameChange = event => {
        this.setState({
            firstName: event.target.value
        })
        console.log(this.state.firstName)
        
    }

    handleLastNameChange = event => {
        this.setState({
            lastName: event.target.value
        })
        console.log(this.state.lastName)
    }

    handleSubmit = event => {
        event.preventDefault()
        this.sendFromDataSomewhere(this.state)
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state.firstName, this.state.lastName)
    }

    render() {
        return(
            <form onSubmit={event => this.handleSubmit(event)}>
                {/* <input type="text" name="firstName" onChange={event => {this.handleFirstNameChange(event)}} value={this.state.firstName} />
                <input type="text" name="lastName" onChange={event => {this.handleLastNameChange(event)}} value={this.state.lastName} /> */}
                <input type="text" name="firstName" value={this.state.firstName} onChange={event => {this.handleChange(event)}} />
                <input type="text" name="lastName" value={this.state.lastName} onChange={event => {this.handleChange(event)}} />
            </form>
        )
    }

}

export default ControlledInput;