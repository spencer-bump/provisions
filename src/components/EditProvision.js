import React from 'react';

class EditProvision extends React.Component {

  render () {
    return (
    <div>Edit Provision: {this.props.match.params.id  } </div>
    );
  }
};

export default EditProvision;