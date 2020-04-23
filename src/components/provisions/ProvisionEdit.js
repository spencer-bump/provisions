import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux'
import { fetchProvision, editProvision } from '../../actions';
import ProvisionForm from './ProvisionForm';

class ProvisionEdit extends React.Component {
    // match.params carry wildcards !!!
    componentDidMount() {
      this.props.fetchProvision(this.props.match.params.id)
    }

    onSubmit = (formValues) => {
      this.props.editProvision(this.props.match.params.id, formValues);
    }

    render () {
      if (!this.props.provision) {
        return <div>Loading...</div>
      } else {
        return (
          <div>
            <h3>Edit Grocery Item</h3>
            <ProvisionForm
              onSubmit={this.onSubmit}
              initialValues={_.pick(this.props.provision, 'name', 'price')}
            />
          </div>
        );
      }

    }

};

const mapStateToProps = (state, ownProps) => {
  return { provision: state.provisions[ownProps.match.params.id] };
}

export default connect(
  mapStateToProps,
  {
    fetchProvision,
    editProvision
  }
)(ProvisionEdit);