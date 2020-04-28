import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchProvisions, editProvision, getCartTotal } from '../../actions';
import './Provision.css';

class ProvisionCart extends React.Component {


  componentDidMount() {
    this.props.fetchProvisions();
    this.props.getCartTotal();
  }

  renderCartList = () => {
    return(
      this.props.provisions.filter(provision => provision.inCart).map(provision => {
        return (
            <div className="ui grid" key={provision.id}>
              <div className="left floated five wide column">
                {provision.name}
              </div>
              <div className="right floated five wide column">
                ${Number.parseFloat(provision.price).toFixed(2)}
              </div>
          </div>
          )
      })
    )
  }

  renderTotal = () => {
    if (!this.props.cartTotal){
      return <div>no cartTotal</div>
    } else {
      return (
        <div className="ui grid" >
          <div className="right floated two wide column">
            Total:
          </div>
          <div className="right floated five wide column">
             ${this.props.cartTotal}
          </div>
        </div>
        )
    }

  }

  clearCart = () => {
    let i, provisions = this.props.provisions;
    const length = provisions.length;
    for (i = 0; i < length; i++) {
      if (provisions[i].inCart) {
        this.props.editProvision(provisions[i].id, { isSelected: false, inCart: false })
      }
    }
  }

  renderButtons = () => {
    return (
        <div className="ui grid" >
          <div className="right floated two wide column">
            <Link to="/" className="ui button" >
              Cancel
            </Link>
          </div>
          <div className="right floated six wide column">
            <button
              className="ui button primary"
              onClick={() => this.clearCart()}
            >Clear Cart</button>
          </div>
        </div>
      )
  }

  render() {
    if (this.props.provisions.length === 0) {
      return <div>Loading ... </div>
    } else {
      return (
        <div className="ui container">
          <h3>Grocery Cart for Checkout</h3>
          <div className="ui celled list">
            {this.renderCartList()}
          </div>
          {this.renderTotal()}
          {this.renderButtons()}
        </div>
      )
  } }
}

const mapStateToProps = (state, ownProps) => {
  return {
    provisions: Object.values(state.provisions),
    cartTotal: state.provisions.cartTotal
  }
}

export default connect(
  mapStateToProps,
  {
    fetchProvisions,
    editProvision,
    getCartTotal
  }
)(ProvisionCart);