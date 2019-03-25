import React, { Component } from 'react'
import PlayerList from './PlayerList';

export default class Battle extends Component {
	render() {
		return (
			<div>
				<PlayerList/>
				<div>
				  <button className="battle-player__submit">Thách Đấu</button>
				</div>
			</div>
		)
	}
}