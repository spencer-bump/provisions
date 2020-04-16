import React, { useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import AddProvision from './AddProvision';
import ListProvisions from './ListProvisions';
import history from '../history';

const App = () => {

  const initialProvisions = [
    {
      id: 1,
      name: "bread flour",
      price: "25.00",
      quantity: "1",
      store: "Costco"
    }
  ];
  const [provisions, setProvisions] = useState(initialProvisions);

  return (
    <div className="ui container" >
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/"  exact component={() => <ListProvisions provisions={provisions} />} />
            <Route path="/provision/new" component={AddProvision} />
          </Switch>
        </div>
      </Router>

    </div>
  )
}

export default App;
