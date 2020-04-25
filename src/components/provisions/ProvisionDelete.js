import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchProvision, deleteProvision } from '../../actions';

class ProvisionDelete extends React.Component {

  componentDidMount() {
      const { id } = this.props.match.params;
      this.props.fetchProvision(this.props.match.params.id)
    }

  renderContent = () => {
    return !this.props.provision ?
            "Are you sure you want to delete this item" :
            `Are you sure you want to delete: ${this.props.provision.name}`;
  }

  renderTitle = () => {
    return !this.props.provision ?
            "Delete Item" :
            `Delete: ${this.props.provision.name}`;
  }

  renderActions = () => {
    const { id } = this.props.match.params;
    return (
        <React.Fragment>
          <button className="ui button negative" onClick={() => this.props.deleteProvision(id)}>Delete</button>
          <Link className="ui button" to="/" >Cancel</Link>
        </React.Fragment>
      )
  }

  render () {
    return (
        <Modal
          title={this.renderTitle()}
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push('/')}
        />
    )
  }

};

const mapStateToProps = (state, ownProps) => {
  return { provision: state.provisions[ownProps.match.params.id] };
}

export default connect(
  mapStateToProps,
  { fetchProvision, deleteProvision }
)(ProvisionDelete);
