import React from 'react';
import { Tab } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { fetchProvisions } from '../../actions';
import ProvisionList from './ProvisionList';

class ProvisionStoreTabs extends React.Component {
    stores = [{name: "Costco", key: "costco"}, {name: "Down to Earth", key: "down_to_earth"}, {name: "Whole Foods", key: "whole_foods"}];

    panes = this.stores.map(store => {
      return (
          { menuItem: store.name, render: () =>
              <Tab.Pane>
                <ProvisionList
                  store={store}
                  provisions={this.props.provisions.filter(provision => provision.userId && provision[store.key])}
                  currentUserId={this.props.currentUserId}
                  isSignedIn={this.props.isSignedIn} />
              </Tab.Pane>
          }
        )
      });

  componentDidMount() {
    this.props.fetchProvisions();
  }

  render () {
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
