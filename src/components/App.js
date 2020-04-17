import React, { useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import AddProvision from './AddProvision';
import ListProvisions from './ListProvisions';
import EditProvision from './EditProvision';
import Header from './Header';
import history from '../history';
import initialProvisions from '../data/mock';

const App = () => {

  const [provisions, setProvisions] = useState(initialProvisions);

  return (
    <div className="ui container" >

      <Router history={history}>
        <Header />
        <div>
          <Switch>
            <Route
              path="/"  exact
              component={() => <ListProvisions provisions={provisions} />} />
            <Route
              path="/provision/new"
              component={AddProvision} />
            <Route
              path="/provision/edit/:id"
              component={EditProvision} />
          </Switch>
        </div>
      </Router>

    </div>
  )
}

export default App;
