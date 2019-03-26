import React, { Component } from 'react'
import queryString from 'query-string';
import PlayerResult from '../result/PlayerResult';
import { getDataAllUser } from '../../api/userAPI';

export default class Result extends Component {

  constructor(props) {
    super(props)

    this.state = {
      users: []
    }
  }

  componentDidMount = () => {

    const data = queryString.parse(this.props.location.search);
    const username1 = data.username1;
    const username2 = data.username2;

    getDataAllUser(username1, username2).then(data => {
      this.setState({
        users: data
      })
    })
  }

  render() {
    const { users } = this.state;
    return (
      <div className="row">
        {
          users.sort((user1, user2) => {
            return user1.score - user2.score > 0 ? -1 : 1;
          }).map((user, index) => {
            return (
              <PlayerResult
                key={index}
                user={user}
                status={index === 0 ? 'WIN' : 'LOSE'}
              />
            )
          })
        }
      </div>
    )
  }
}
