import React, { Component } from 'react'
import Profile from './Profile';

export default class PlayerResult extends Component {
    render() {
        return (
            <div className="column player-result">
                <h2 className="header">props.label</h2>
                <p className="column-score">Score:props.score</p>
                <Profile/>
            </div>
        )
    }
}
