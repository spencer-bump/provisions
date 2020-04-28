import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { editProvision } from '../../actions';

class ProvisionList extends React.Component {

  renderAdmin = (provision) => {
    if (provision.userId === this.props.currentUserId && this.props.isSignedIn) {
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

  renderToBuyListButton = provision => {
    return (
      <div className="left floated content">
        <button
          className="ui button"
          onClick={() => this.props.editProvision(provision.id, { isSelected: true } )}
        >
          <i className="list ul icon"></i>
        </button>
      </div>
    )
  }

  renderToCartButton = provision => {
    return (
      <div className="left floated content">
        <button
          className="ui button primary"
          onClick={() => this.props.editProvision(provision.id, { inCart: true } )}
        >
        <i className="shopping cart icon"></i>
        </button>
      </div>
    )
  }

  renderAvailableItemsList = () => {
    return (
        this.props.provisions.filter(provision => !provision.isSelected).map(provision => {
          return (
            <div className="item" key={provision.id} >
              {this.renderToBuyListButton(provision)}
              {this.renderAdmin(provision)}
              <div className="content">
                {provision.name}
                <div className="description">${Number.parseFloat(provision.price).toFixed(2)}</div>
              </div>

            </div>
            )
        })
      )
  }

  renderSelectedForPurchaseList = () => {
    return (
        this.props.provisions.filter(provision => provision.isSelected && !provision.inCart).map(provision => {
          return (
            <div className="item" key={provision.id} >
              {this.renderToCartButton(provision)}
              {this.renderAdmin(provision)}
              <div className="content">
                {provision.name}
                <div className="description">${Number.parseFloat(provision.price).toFixed(2)}</div>
              </div>

            </div>
            )
        })
      )
  }

  renderAddProvision = () => {
    if (this.props.isSignedIn) {
      return (
        <div className="right menu">
          <Link to="/provision/new" className="ui button small basic" >
            Add Item
          </Link>
          <Link to="/provision/cart" className="ui button small" >
            <i className="shopping cart icon"></i>
          </Link>
        </div>
      );
    }
  }

  renderSubHeader = () => {
    return (
      <div className="ui secondary pointing menu" >
        <div className="item" >
          {this.props.store.name}
        </div>
        {this.renderAddProvision()}
      </div>
    );
  }


  render() {
    return (
        <div>
          {this.renderSubHeader()}
          <div className="ui celled list">
            {this.renderSelectedForPurchaseList()}
            {this.renderAvailableItemsList()}

          </div>
        </div>
      )
  }
}

export default connect(
  null,
  { editProvision }
  )(ProvisionList);
