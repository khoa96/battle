import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import { BrowserRouter as Routers, Route, Switch } from 'react-router-dom'
import Battle from './components/Battle';
import PageNotFound from './components/PageNotFound';
import PopularList from './components/PopularList';
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
            <Route component={PageNotFound} />>
        </Switch>
        </div>
      </Routers>
    );
  }
}
function mapStateToPerops 

export default App;
