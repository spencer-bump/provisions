import React from 'react';
import { Link } from 'react-router-dom';
import { Tab } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { fetchProvisions } from '../../actions';


const StoreList = ({ store, provisions, currentUserId, isSignedIn }) => {

  const renderAdmin = (provision) => {
    if (provision.userId === currentUserId) {
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
            <div key={provision.id} className="item">
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

  const renderSubHeader = () => {
    return (
      <div className="ui secondary pointing menu" >
        <div className="item" >
          {store}
        </div>
        <div className="right menu">
          <Link to="/provision/new" className="item" >
            Add Grocery Item
          </Link>
        </div>
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

    panes = [
                  { menuItem: 'Costco', render: () => <Tab.Pane><StoreList store="Costco" provisions={this.props.provisions} currentUserId={this.props.currentUserId} isSignedIn={this.props.isSignedIn} /></Tab.Pane> },
                  { menuItem: 'Down to Earth', render: () => <Tab.Pane><StoreList store="Down to Earth" provisions={this.props.provisions} currentUserId={this.props.currentUserId} isSignedIn={this.props.isSignedIn} /></Tab.Pane> },
                  { menuItem: 'Whole Foods', render: () => <Tab.Pane><StoreList store="Whole Foods" provisions={this.props.provisions} currentUserId={this.props.currentUserId} isSignedIn={this.props.isSignedIn} /></Tab.Pane> },
                ];


  // console.log(panes);


            // TODO:
            // 1)  List by store -
            //     Add tab of lists by store,
            //     map thru stores selected
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
