import React from 'react';
import { Link } from 'react-router-dom';

class ProvisionEdit extends React.Component {

  render () {
    return (
      <div>
        <div>Edit Provision: {this.props.match.params.id  } </div>
        <Link to={`/provision/delete/${this.props.match.params.id}`} >
          <i className="trash alternate outline icon"></i>
        </Link>
      </div>
    );
  }
};

export default ProvisionEdit;