import React from 'react';
import { Tab } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { fetchProvisions } from '../../actions';
import ProvisionList from './ProvisionList';

class ProvisionStoreTabs extends React.Component {
    stores = [{name: "Costco"}, {name: "Down to Earth"}, {name: "Whole Foods"}];

    panes = this.stores.map(store => {
      return (
          { menuItem: store.name, render: () =>
              <Tab.Pane>
                <ProvisionList
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
)(ProvisionStoreTabs);
