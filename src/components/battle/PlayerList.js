import React, { Component } from 'react'
import Player from './Player';

export default class PlayerList extends Component {
    render() {
        return (
            <div className="battle">
                <div className="row">
                    <Player />
                    <Player />
                </div>
                <button className="btn btn--form battle-btn"> &#9812; Battle &#9812;</button>
            </div>
        )
    }
}
