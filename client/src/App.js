import React, { Component } from 'react';
import BlogList from './BlogList'
import BlogForm from './BlogForm'
import { Route, Switch } from 'react-router-dom';
import Blog from './Blog';



class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={BlogList} />
          <Route exact path="/blogs/:id" component ={Blog} />
        </Switch>
      </div>
    );
  }
}

export default App;
