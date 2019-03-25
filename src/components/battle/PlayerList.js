import React, { Component } from 'react'
import Player from './Player';

const users = [
    {
        id: 1,
        lable: 'Người Chơi 1'
    },
    {
        id: 2,
        lable: 'Người Chơi 2'
    }
]
export default class PlayerList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isUser1Ready: false,
            isUser2Ready: false
        }

        this.onCheckUserReady = this.onCheckUserReady.bind(this);
        this.onCheckUserReset = this.onCheckUserReset.bind(this)
    }

    onCheckUserReady(user_id) {
        if (user_id === 1) {
            this.setState({
                isUser1Ready: true
            })
        }
        if (user_id === 2) {
            this.setState({
                isUser2Ready: true
            })
        }
    }

    onCheckUserReset(user_id) {
        if (user_id === 1) {
            this.setState({
                isUser1Ready: false
            })
        }
        if (user_id === 2) {
            this.setState({
                isUser2Ready: false
            })
        }
    }

    render() {
        const { isUser1Ready, isUser2Ready } = this.state;
        return (
            <div className="battle">
                <div className="row">
                    {
                        users.map((user) => {
                            return <Player
                                key={user.id}
                                id={user.id}
                                user={user}
                                onCheckUserReady={this.onCheckUserReady}
                                onCheckUserReset={this.onCheckUserReset}
                            />
                        })
                    }
                </div>
                {
                    (isUser1Ready && isUser2Ready) ? <button className="btn btn--form battle-btn"> &#9812; Thách Đấu &#9812;</button> : ''
                }
            </div>
        )
    }
}
