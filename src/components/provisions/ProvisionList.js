import React from 'react';
import { Link } from 'react-router-dom';
import { Tab } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { fetchProvisions } from '../../actions';


const StoreList = ({ store, provisions, currentUserId, isSignedIn }) => {

  const renderEdit = (provision) => {
    if (provision.userId === currentUserId && isSignedIn) {
      return (
        <div className="right floated content">
          <Link to={`/provision/edit/${provision.id}`} >
            <div className="ui button basic" >
              <i className="pencil alternate icon"></i>
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
              {renderEdit(provision)}
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



class ProvisionList extends React.Component {
    stores = [{name: "Costco"}, {name: "Down to Earth"}, {name: "Whole Foods"}];

    panes = this.stores.map(store => {
      return (
          { menuItem: store.name, render: () =>
              <Tab.Pane>
                <StoreList
                  store={store.name}
                  provisions={this.props.provisions.filter(provision => provision.userId)}
                  currentUserId={this.props.currentUserId}
                  isSignedIn={this.props.isSignedIn} />
              </Tab.Pane>
          }
        )
      });

            // TODO:
            // 2)  Buttons: Select, To Cart
            // 3)  View Cart modal, showing list
            //     at checkout with total price

  componentDidMount() {
    this.props.fetchProvisions();
  }

  render () {
    console.log("this.props: ", this.props);
    return (
      <div>
        <h3>Grocery List</h3>
        <Tab panes={this.panes} />
      </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    provisions: Object.values(state.provisions),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(
  mapStateToProps,
  { fetchProvisions }
)(ProvisionList);
