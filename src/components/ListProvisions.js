import React from 'react';
import { Link } from 'react-router-dom';

const ListProvisions = ({provisions}) => {

  return (
    <div>
      <h3>Grocery List</h3>
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
          {provisions.filter(provision => !provision.selected ).map(provision => {
            return (
              <tr key={provision.id}>
                <td>
                  <div
                    className="ui button primary"
                    onClick={() =>  console.log("bought grocery item, return to unselected list") }
                    >
                    Bought
                  </div>
                </td>
                <td style={{highlight: "bold"}}>{provision.name}</td>
                <td>${provision.price}</td>
                <td>{provision.store}</td>
                <td>
                  <div onClick={() => console.log("edit grocery item")}>
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
          {provisions.filter(provision => provision.selected ).map(provision => {
            return (
              <tr key={provision.id}>
                <td>
                  <div
                    className="ui button"
                    onClick={() => console.log("select grocery item")}
                    >
                    Select
                  </div>
                </td>
                <td style={{highlight: "bold"}}>{provision.name}</td>
                <td>${provision.price}</td>
                <td>{provision.store}</td>
                <td>
                  <div onClick={() => console.log("edit grocery item")}>
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


export default ListProvisions;