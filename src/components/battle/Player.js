import React, { Component } from 'react'
import PlayerInput from '../battle/PlayerInput';
import PlayerReview from './PlayerReview';

export default class Player extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <PlayerInput
                    id='playerOne'
                    label="Player One"
                /> */}
                <PlayerReview/>
            </React.Fragment>
        )
    }
}