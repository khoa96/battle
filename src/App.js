import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import { BrowserRouter as Routers, Route, Switch } from 'react-router-dom'
import Battle from './components/battle/Battle';
import PageNotFound from './components/PageNotFound';
import PopularList from './components/popular/PopularList';
import Result from './components/battle/Result';

class App extends Component {
  render() {
    return (
      <Routers>
        <div className="container">
          <Nav />
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/battle" component={Battle} />
            <Route path="/popular" component={PopularList} />
            <Route path="/result" component={Result} />
            <Route component={PageNotFound} />
        </Switch>
        </div>
      </Routers>
    );
  }
}


export default App;
