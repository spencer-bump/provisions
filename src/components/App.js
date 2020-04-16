import React, { useState } from 'react';

import AddProvision from './AddProvision';
import ListProvisions from './ListProvisions';

const App = () => {

  const initialProvisions = [
    {
      name: "bread flour",
      price: "25.00",
      quantity: "1",
      store: "Costco"
    }
  ];
  const [provisions, setProvisions] = useState(initialProvisions);

  return (
    <div className="ui container" >
      <AddProvision />
      <ListProvisions provisions={provisions} />
    </div>
  )
}

export default App;
