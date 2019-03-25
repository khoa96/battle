import React, { Component } from 'react'
import PlayerReview from '../battle/PlayerReview';

export default class Profile extends Component {
    render() {
        return (
            <div className="colum">
                <img
                    className="avatar"
                    src="https://avatars2.githubusercontent.com/u/257?v=4"
                    alt="dff"
                />
                <h2 className="username">@name</h2>
                <ul className="profile-items">
                    <li>Followers: info.followers</li>
                    <li>Following: info.following</li>
                    <li>Public Repos: info.public_repos</li>
                </ul>
            </div>

        )
    }
}
