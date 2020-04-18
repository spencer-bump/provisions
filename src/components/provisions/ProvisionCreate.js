import React from 'react';
import mock from '../../data/mock';
import { Field, reduxForm } from 'redux-form';
import './ProvisionCreate.css';

const ProvisionCreate = () => {

  const provision_keys = Object.keys(mock[0]).filter(key => key !== "id" && key !== "selected");

  const renderInput = key => {
    if (key === "store") {
      return (
          <select className="ui item dropdown my-input">
            <option value="">store</option>
            <option value="3">Costco</option>
            <option value="2">Down To Earth</option>
            <option value="1">Whole Foods</option>
            <option value="0">DTE or Whole Foods</option>
          </select>
        );
    } else {
      return <input type="text" placeholder={`${key}`} name={`${key}`} ></input>
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit form values');
    // add to mockdata state value

  }

  return (
    <div className="my-container">
      <form onSubmit={handleSubmit} className="form-container">
      {provision_keys.map(key => {
        return (
            <div key={key}>
              <div className="ui input my-input" >
                {renderInput(key)}
              </div>
            </div>
          )
      })}
      <button className="ui button primary my-input" type="submit" >Add Grocery Item</button>
      </form>
    </div>

  );
}

export default ProvisionCreate;