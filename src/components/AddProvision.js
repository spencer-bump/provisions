import React from 'react';
import mock from '../data/mock';

const AddProvision = () => {

  const provision_keys = Object.keys(mock[0]).filter(key => key !== "id" && key !== "selected");

  const renderInput = key => {
    if (key === "store") {
      console.log("store");
      return (
          <select className="ui item dropdown" style={{width: "178px"}}>
            <option value="">Store</option>
            <option value="3">Costco</option>
            <option value="2">Down To Earth</option>
            <option value="1">Whole Foods</option>
            <option value="0">Any</option>
          </select>
        );
    } else {
      return <input type="text" placeholder={`${key}`} name={`${key}`}></input>
    }
  }

  return (
    <div>
      {provision_keys.map(key => {
        return (
            <div>
              <div className="ui input" style={{paddingBottom: "20px"}}>
                {renderInput(key)}
              </div>
            </div>
          )
      })}
      <button className="ui button primary" onClick={() => console.log("Add grocery item ", provision_keys)}>Add Grocery Item</button>

    </div>

  );
}

export default AddProvision;