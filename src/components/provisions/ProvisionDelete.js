import React from 'react';
import { connect } from 'react-redux'
import { fetchProvision } from '../../actions';

class ProvisionDelete extends React.Component {

  componentDidMount() {
      this.props.fetchProvision(this.props.match.params.id)
    }

  render () {
    if (!this.props.provision) {
      return <div>Loading...</div>
    } else {
      return (
        <div>
          <h2>ProvisionDelete: { this.props.provision.name  }</h2>
        </div>
      )
    }
  }

};

const mapStateToProps = (state, ownProps) => {
  console.log("ownProps: ", ownProps)
  return { provision: state.provisions[ownProps.match.params.id] };
}

export default connect(
  mapStateToProps,
  { fetchProvision }
)(ProvisionDelete);
