import React, { Component } from 'react'
import PlayerInput from '../battle/PlayerInput';
import PlayerReview from './PlayerReview';

export default class Player extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isShowPlayerInput: true,
            isShowPlayerReview: false
        }
        this.onUsernameSubmit = this.onUsernameSubmit.bind(this);
        this.onResetUser = this.onResetUser.bind(this);
    }


    onUsernameSubmit(id, username) {
        //call API ->get user
        // set State 
        this.setState({
            isShowPlayerInput: false,
            isShowPlayerReview: true
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



    render() {
        let { id, user } = this.props;
        let { isShowPlayerInput, isShowPlayerReview } = this.state;
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
                           onResetUser={this.onResetUser}
                        /> 
                        : ""
                }
            </React.Fragment>
        )
    }
}