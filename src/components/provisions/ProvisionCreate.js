import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, Dropdown, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createProvision } from '../../actions';
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

  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
          <div className="ui error small message my-error" >
            <div className="header" >
              {error}
            </div>
          </div>
        );
    }
  }


  renderNameInput = ({ input, label, meta }) => {
    const inputClassName = `ui input my-input field ${meta.error && meta.touched ? 'error' : ''}`
    const placeholder = meta.error && meta.touched ? `${meta.error}` : `${label}`
    const labelClassName = meta.error && meta.touched ? 'ui red basic label' : "ui  label"
    return (
      <div>
        <div className={inputClassName}>
          <div className={labelClassName}>{label}</div>
          <input
            {...input}
            label={label}
            placeholder={placeholder}
            autoComplete="off"
          />
        </div>
      </div>
      );
  }

  renderPriceInput = ({ input, label, meta }) => {
    const inputClassName = `ui input my-input field ${meta.error && meta.touched ? 'error' : ''}`
    const placeholder = meta.error && meta.touched ? `${meta.error}` : `${label}`
    const labelClassName = meta.error && meta.touched ? 'ui red basic label' : "ui  label"
    return (
      <div>
        <div className={inputClassName}>
          <div className={labelClassName}>{label}</div>
          <input
            {...input}
            label={label}
            placeholder={placeholder}
            autoComplete="off"
          />
        </div>
        {this.renderError(meta)}
      </div>
      );
  }

  onSubmit = formValues => {
    this.props.createProvision(formValues);
  }



  render () {
    console.log("props: ", this.props)
    return (
      <div className="my-container">
        {/*using redux-form props.handleSubmit - sends fromValues*/}
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="form-container">
          <Field
            name="name"
            label="Name"
            component={this.renderNameInput}
          />
          <Field
            name="price"
            label="Price"
            component={this.renderPriceInput}
          />
      {/*    <Field
            name=""
            label=""
            component={this.renderInput}
          />*/}
          <Button className="primary my-button">Submit</Button>

        </form>
      </div>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.name) {
    errors.name = "You must enter a name";
  }
  if (formValues.price) {
    if (isNaN(formValues.price)) {
      errors.price = "Price must be a number.";
    }
  }
  return errors;
}

const formWrapped = reduxForm({
  form: 'provisionCreate',
  validate: validate
})(ProvisionCreate);

export default connect(
  null,
  { createProvision }
)(formWrapped);
