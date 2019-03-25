import React, { Component } from 'react'
import Player from './Player';

export default class PlayerList extends Component {
    render() {
        return (
            <div className="battle-container">
                <Player />
                <Player />
            </div>
        )
    }
}
