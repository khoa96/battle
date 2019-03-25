import React, { Component } from 'react'

export default class PlayerInput extends Component {
    constructor(props) {
        super(props)

        this.state = {

        };
        this.changeLayout = this.changeLayout.bind(this)
    };

    changeLayout() {
        this.props.onHide();
    }

    render() {
        return (
            <form className="battle-player">
                <label className='battle-player__header' htmlFor="username">
                    Player One or Two
				</label>
                <input
                    className="battle-player__input"
                    id="username"
                    placeholder="Github username"
                    autoComplete="off"
                    type="text"
                />
                <button
                    className="battle-player__submit"
                    type="button"
                    onClick={this.changeLayout}
                >
                    Submit
                 </button>
            </form>
        )
    }
}