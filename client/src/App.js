import React, { Component } from 'react';
import BlogList from './BlogList'

import { Route, Switch } from 'react-router-dom';
import Blog from './Blog';
import NoMatch from './NoMatch';



class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={BlogList} />
          <Route exact path="/blogs/:id" component ={Blog} />
          <Route component ={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
