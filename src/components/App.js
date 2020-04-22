import React, { useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import ProvisionCreate  from './provisions/ProvisionCreate';
import ProvisionList    from './provisions/ProvisionList';
import ProvisionEdit    from './provisions/ProvisionEdit';
import ProvisionDelete  from './provisions/ProvisionDelete';

import Header from './Header';
import history from '../history';

{/*
  // POST   create  "/provision/new"
  // GET    list    "/"
  // GET    show    "/provision/show/:id"
  // PUT    update  "/provision/edit/:id"
  // DELETE delete  "/provision/delete/:id"
*/}

const App = () => {

  return (
    <div className="ui container" >
      <Router history={history}>
        <Header />
        <div>
          <Switch>
            <Route
              path="/"  exact
              component={() => <ProvisionList  />} />
            <Route
              path="/provision/new"
              component={ProvisionCreate} />
            <Route
              path="/provision/edit/:id"
              component={ProvisionEdit} />
            <Route
              path="/provision/delete/:id"
              component={ProvisionDelete} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;
