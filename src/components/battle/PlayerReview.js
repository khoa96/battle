import React, { Component } from 'react'

export default class PlayerReview extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
        this.onResetUser = this.onResetUser.bind(this)
    }

    onResetUser() {
        this.props.onResetUser(this.props.id);
    }

    render() {
        return (
            <div className="colum">
                <img
                    className="avatar"
                    src="https://github.com/khoa96.png?size=200"
                    alt="Nguyen Dang Khoa PTIT"
                />
                <h2 className="username">@Nguyen Dang Khoa PTIT</h2>
                <button className="btn btn--form btn-reset" onClick={this.onResetUser}>Reset</button>
            </div>
        )
    }
}