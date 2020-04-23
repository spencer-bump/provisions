import React from 'react';
import { connect } from 'react-redux';
import { createProvision } from '../../actions';
import ProvisionForm from './ProvisionForm';

class ProvisionCreate extends React.Component {

  onSubmit = formValues => {
    this.props.createProvision(formValues);
  }

  render () {
    console.log("props: ", this.props)
    return (
      <div >
        <h3>Add Grocery Item</h3>
        <ProvisionForm onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

export default connect(
  null,
  { createProvision }
)(ProvisionCreate);
