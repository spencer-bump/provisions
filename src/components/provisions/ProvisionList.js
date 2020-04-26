import React from 'react';
import { Link } from 'react-router-dom';
import { editProvision } from '../../actions';

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

  const renderToBuyListButton = provision => {
    return (
      <div className="left floated content">
        <button
          className="ui button"
          onClick={() => console.log('to Store List')}
        >Select</button>
      </div>
    )
  }

  const renderToCartButton = provision => {
    return (
      <div className="left floated content">
        <button
          className="ui button primary"
          onClick={() => console.log('to Grocery Cart')}>To Cart</button>
      </div>
    )
  }

  const renderAvailableItemsList = () => {
    return (
        provisions.filter(provision => !provision.isSelected).map(provision => {
          return (
            <div className="item" key={provision.id} >
              {renderToBuyListButton(provision)}
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

  const renderSelectedForPurchaseList = () => {
    return (
        provisions.filter(provision => provision.isSelected && !provision.inCart).map(provision => {
          return (
            <div className="item" key={provision.id} >
              {renderToCartButton(provision)}
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
          {store.name}
        </div>
        {renderAddProvision()}
      </div>
    );
  }

  return (
      <div>
        {renderSubHeader()}
        <div className="ui celled list">
          {renderSelectedForPurchaseList()}
          {renderAvailableItemsList()}

        </div>
      </div>
    )
}

export default ProvisionList;