import React, { Component } from 'react'
import queryString from 'query-string';
import PlayerResult from '../result/PlayerResult';


export default class Result extends Component {
  
  componentDidMount = () => {
    console.log(queryString.parse(this.props.location.search))
  }
  
  render() {
    return (
        <div className="row">
         <PlayerResult/>
         <PlayerResult/>
      </div>
    )
  }
}
