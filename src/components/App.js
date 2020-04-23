import React, { useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import ProvisionCreate    from './provisions/ProvisionCreate';
import ProvisionStoreTabs from './provisions/ProvisionStoreTabs';
import ProvisionEdit      from './provisions/ProvisionEdit';
import ProvisionDelete    from './provisions/ProvisionDelete';

import Header from './Header';
import history from '../history';

{/*
  // URL-based selection - passing :id
  // POST   create  "/provision/new"
  // GET    list    "/"
  // GET    show    "/provision/:id"
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
              component={() => <ProvisionStoreTabs  />} />
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
