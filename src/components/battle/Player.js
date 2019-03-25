import React, { Component } from 'react'
import PlayerInput from '../battle/PlayerInput';
import PlayerReview from './PlayerReview';

export default class Player extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isShowPlayerInput: true,
            isShowPlayerReview: false,
            isShowBattle: false
        }
        this.onHide = this.onHide.bind(this);

    }

    onHide() {
        this.setState({
            isShowPlayerInput: false,
            isShowPlayerReview: true
        })
    }

    render() {
        let { isShowPlayerInput, isShowPlayerReview } = this.state;
        return (
            <React.Fragment>
                {isShowPlayerInput ? <PlayerInput onHide={this.onHide} /> : ''}
                {isShowPlayerReview ? <PlayerReview /> : ''}
            </React.Fragment>
        )
    }
}