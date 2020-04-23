import React from 'react';
import { connect } from 'react-redux'
import { fetchProvision } from '../../actions';

class ProvisionEdit extends React.Component {
    // match.params carry wildcards !!!
    componentDidMount() {
      this.props.fetchProvision(this.props.match.params.id)
    }
    render () {
      console.log("props: ", this.props)
      if (!this.props.provision) {
        return <div>Loading...</div>
      } else {
        return (
          <div>
            <div>Edit Provision: {this.props.provision.name  } </div>
          </div>
        );
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
)(ProvisionEdit);