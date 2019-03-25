import React, { Component } from 'react'
import Player from './Player';
import { Link } from 'react-router-dom';

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
            isUser2Ready: false,
            username1: "",
            username2: ""
        }

        this.onCheckUserReady = this.onCheckUserReady.bind(this);
        this.onCheckUserReset = this.onCheckUserReset.bind(this);
        this.onBattle = this.onBattle.bind(this)
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

    onBattle(user) {
    
        if (user.id === 1) {
            this.setState({
                username1: user.username
            })
        }
        if (user.id === 2) {
            this.setState({
                username2: user.username
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
                                onBattle={this.onBattle}
                            />
                        })
                    }
                </div>
                {
                    (isUser1Ready && isUser2Ready) ?
                     <Link
                         to={{
                             pathname: "/result",
                             search: "?username1=" + this.state.username1 + "&username2="+ this.state.username2
                         }}
                         className="btn btn--form battle-btn"> 
                         &#9812; Thách Đấu &#9812;
                    </Link> 
                     : ''
                }
            </div>
        )
    }
}
