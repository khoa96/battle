import React, { Component } from 'react'

export default class PlayerReview extends Component {
	render() {
		return (
			<div>
				<div className="player-preview">
					<img
						className="avatar"
						src="https://github.com/khoa96.png?size=200"
						alt="Nguyen Dang Khoa PTIT"
					/>
					<h2>Nguyen Dang Khoa PTIT</h2>
					<button className="battle-player__submit">Reset</button>
				</div>
			</div>
		)
	}
}