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

    onUsernameChange(event) {
        this.setState({
            username: event.target.value
        })
    }

    onUsernameSubmit(id) {
       if (this.state.username) {
          this.props.onUsernameSubmit(id, this.state.username)
       }
    }
    
    render() {
        let { id, label } = this.props;
        return (
            <div className="column">
                <label className="header">
                    {label}
                    <input type="text"
                        id={id}
                        value={this.state.username}
                        placeholder="github username"
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
            </div>
        )
    }
}