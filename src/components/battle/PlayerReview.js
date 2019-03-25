import React, { Component } from 'react'

export default class PlayerReview extends Component {
    render() {
        return (
            <div className="colum">
                <img
                    className="avatar"
                    src="https://github.com/khoa96.png?size=200"
                    alt="Nguyen Dang Khoa PTIT"
                />
                <h2 className="username">@Nguyen Dang Khoa PTIT</h2>
                <button className="btn btn--form btn-reset">Reset</button>
            </div>
        )
    }
}