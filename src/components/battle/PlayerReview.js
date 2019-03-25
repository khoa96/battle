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

    componentDidMount = () => {
       const user = {
           id: this.props.id,
           username: this.props.info.name
       }
       this.props.onBattle(user)
    }
    

    render() {
        const { name, avatar_url } = this.props.info;
        return (
            <div className="colum">
                <img
                    className="avatar"
                    src={avatar_url}
                    alt={name}
                />
                <h2 className="username">@{name}</h2>
                <button className="btn btn--form btn-reset" onClick={this.onResetUser}>Reset</button>
            </div>
        )
    }
}