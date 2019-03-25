import React, { Component } from 'react'

export default class PlayerInput extends Component {
   
    render() {
        return (
            <form className="column">
                <label className="header">this.props.labe</label>
                <input type="text"
                    id=""
                    value=""
                    placeholder="github username"
                    autoComplete='off'
                />
                <button
                    className="btn btn--form"
                    type="submit"
                >
                    Submit
            </button>
            </form>
        )
    }
}