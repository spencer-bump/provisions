import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, Dropdown, Button } from 'semantic-ui-react';
import './ProvisionCreate.css';

import mock from '../../data/mock';

class ProvisionCreate extends React.Component {

  state = {

    provision_keys: Object.keys(mock.provisions[0]).filter(key => key !== "id" && key !== "selected"),
    storeOptions: [
        {
          key: 'Costco',
          text: 'Costco',
          value: "Costco"
        },
        {
          key: 'Down To Earth',
          text: 'Down To Earth',
          value: "Down To Earth"
        },
        {
          key: 'Whole Foods',
          text: 'Whole Foods',
          value: "Whole Foods"
        },
        {
          key: 'DTE or Whole Foods',
          text: 'DTE or Whole Foods',
          value: "DTE or Whole Foods"
        }
      ],
      mock: mock

  }


  renderInput = key => {
    const renderInputTag = ({ input }) => {
      return (
          <div>
            <Input
              {...input}
              label={`${key}`}
              className="my-input"
              placeholder={`${key}`}
            />
          </div>
        );
    }

    const renderDropdown = ({ input }) => {
      return (
        <Dropdown
          {...input}
          label={`${key}`}
          className="my-input"
          placeholder='Select Store'
          fluid
          selection
          options={this.state.storeOptions}
          />
      );
    }

    if (key === "store") {
      return (
          <Field
            name={`${key}`}
            component={renderDropdown}
          />
        );
    } else {
      return (
          <Field
            name={`${key}`}
            component={renderInputTag}
          />
        );
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // TODO handle form submit
    console.log('submit form values');
  }

  render () {
    return (
      <div className="my-container">
        <form onSubmit={this.handleSubmit} className="form-container">
          {this.state.provision_keys.map(key => {
            return (
                <div key={key}>
                    {this.renderInput(key)}
                </div>
              )
          })}
          <Button
            className="primary my-input"
            type="submit">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'provisionCreate'
})(ProvisionCreate);

