import React, { Component } from 'react'
import PlayerInput from '../battle/PlayerInput';
import PlayerReview from './PlayerReview';
import { getProfile } from '../../api/userAPI'

export default class Player extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isShowPlayerInput: true,
            isShowPlayerReview: false,
            info: null
        }
        this.onUsernameSubmit = this.onUsernameSubmit.bind(this);
        this.onResetUser = this.onResetUser.bind(this);
        this.onBattle = this.onBattle.bind(this)
    }


    onUsernameSubmit(id, username) {
        //call API ->get user
        getProfile(username).then(user => {
            const userInfo = {
                avatar_url: user.avatar_url,
                name: user.login
            }
            this.setState({
                info: userInfo,
                isShowPlayerInput: false,
                isShowPlayerReview: true
            })
        })
        this.props.onCheckUserReady(id);
    }

    onResetUser(id) {
        this.setState({
            isShowPlayerInput: true,
            isShowPlayerReview: false
        })
        this.props.onCheckUserReset(id);

    }

    onBattle(user) {
        this.props.onBattle(user)
    }
    
    render() {
        let { id, user } = this.props;
        let { isShowPlayerInput, isShowPlayerReview, info } = this.state;
        return (
            <React.Fragment>
                {
                    isShowPlayerInput ?
                        <PlayerInput
                            id={id}
                            label={user.lable}
                            onUsernameSubmit={this.onUsernameSubmit}
                        /> : ""
                }
                {
                    isShowPlayerReview ?
                        <PlayerReview
                            id={id}
                            info={info}
                            onResetUser={this.onResetUser}
                            onBattle={this.onBattle}
                        />
                        : ""
                }
            </React.Fragment>
        )
    }
}