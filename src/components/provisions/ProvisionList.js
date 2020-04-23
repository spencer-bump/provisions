import React from 'react';
import { Link } from 'react-router-dom';

const ProvisionList = ({ store, provisions, currentUserId, isSignedIn }) => {

  const renderAdmin = (provision) => {
    if (provision.userId === currentUserId && isSignedIn) {
      return (
        <div className="right floated content">
          <Link to={`/provision/edit/${provision.id}`} >
            <div className="ui button basic" >
              <i className="pencil alternate icon"></i>
            </div>
          </Link>
          <Link to={`/provision/delete/${provision.id}`} >
            <div className="ui button basic" >
              <i className="trash alternate outline icon"></i>
            </div>
          </Link>
        </div>
      )
    }
  }

  const renderSelect = provision => {
    console.log("TODO - wire up 'selected'")
    return (
      <div className="left floated content">
        <button className="ui button">Select</button>
      </div>
    )
  }

  const renderList = () => {
    return (
        provisions.map(provision => {
          return (
            <div className="item" key={provision.id} >
              {renderSelect(provision)}
              {renderAdmin(provision)}
              <div className="content">
                {provision.name}
                <div className="description">{provision.price}</div>
              </div>

            </div>
            )
        })
      )
  }

  const renderAddProvision = () => {
    if (isSignedIn) {
      return (
        <div className="right menu">
          <Link to="/provision/new" className="ui button small basic" >
            Add Item
          </Link>
        </div>
      );
    }
  }

  const renderSubHeader = () => {
    return (
      <div className="ui secondary pointing menu" >
        <div className="item" >
          {store}
        </div>
        {renderAddProvision()}
      </div>
    );
  }

  return (
      <div>
        {renderSubHeader()}
        <div className="ui celled list">
          {renderList()}
        </div>
      </div>
    )
}

export default ProvisionList;