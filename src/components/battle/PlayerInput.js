import React, { Component } from 'react'

export default class PlayerInput extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: "",
            username: ""
        }
        this.onUsernameSubmit = this.onUsernameSubmit.bind(this)
    }

    onUsernameChange(event, id) {
        this.setState({
            username: event.target.value
        })
    }

    onUsernameSubmit(id) {
        this.props.onUsernameSubmit(id, this.state.username)
    }
    
    render() {
        let { id, label } = this.props;
        return (
            <form className="column">
                <label className="header">
                    {label}
                    <input type="text"
                        id={id}
                        value={this.state.username}
                        placeholder="github username"
                        autoComplete='off'
                        onChange={(event) => { this.onUsernameChange(event) }}
                    />
                </label>
                <button
                    className={`btn ${this.state.username? "btn--form" : "btn--disable"}`}
                    type="button"
                    onClick={() => {this.onUsernameSubmit(id)}}
                >
                    Submit
            </button>
            </form>
        )
    }
}