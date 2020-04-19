import React from 'react';
import { Link } from 'react-router-dom';
import { Tab } from 'semantic-ui-react';


const ProvisionList = ({ provisions }) => {
  // const stores = [{name: "Costco"}, {name: "Down to Earth"}, {name: "Whole Foods"}];

  const panes = [
                  { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
                  { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
                  { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
                ];


  // console.log(panes);

    {/*
            TODO:
            1)  List by store -
                Add tab of lists by store,
                map thru stores selected
            2)  Buttons: Select, To Cart
            3)  View Cart modal, showing list
                at checkout with total price
      */}

  return (
    <div>
      <h3>Grocery List</h3>
      <Tab panes={panes} />


      <table className="ui celled table unstackable">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Price</th>
            <th>Store</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {provisions.filter(provision => provision.selected ).map(provision => {
            return (
              <tr key={provision.id}>
                <td>
                  <div
                    className="ui button primary my-button"
                    onClick={() =>  console.log("bought grocery item, return to unselected list") }
                    >
                    To Cart
                  </div>
                </td>
                <td style={{highlight: "bold"}}>{provision.name}</td>
                <td>${provision.price}</td>
                <td>{provision.store}</td>
                <td>
                  <div onClick={() => provision.selected = false }>
                    <Link to={`/provision/edit/${provision.id}`} >
                      <i className="pencil alternate icon"></i>
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tbody>
          {provisions.filter(provision => !provision.selected ).map(provision => {
            return (
              <tr key={provision.id}>
                <td>
                  <div
                    className="ui button my-button"
                    onClick={() => console.log("select grocery item")}
                    >
                    Select
                  </div>
                </td>
                <td style={{highlight: "bold"}}>{provision.name}</td>
                <td>${provision.price}</td>
                <td>{provision.store}</td>
                <td>
                  <div onClick={() => provision.selected = true }>
                    <Link to={`/provision/edit/${provision.id}`} >
                      <i className="pencil alternate icon"></i>
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}


export default ProvisionList;