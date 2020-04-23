import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, Dropdown, Button } from 'semantic-ui-react';
import './ProvisionCreate.css';

// import mock from '../../data/mock';

class ProvisionForm extends React.Component {

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
    this.props.onSubmit(formValues)
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

export default reduxForm({
  form: 'provisionForm',
  validate: validate
})(ProvisionForm);

