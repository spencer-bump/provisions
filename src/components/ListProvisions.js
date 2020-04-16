import React from 'react';

const ListProvisions = ({provisions}) => {
  return (
    <div>
      <h3>Grocery List</h3>
      <table className="ui celled table unstackable">
        <thead>
          <tr>
            <th>Select</th>
            <th>Quantity</th>
            <th>Name</th>
            <th>Price</th>
            <th>Store</th>
          </tr>
        </thead>
        <tbody>
          {provisions.map(provision => {
            return (
              <tr>
                <td><div
                      className="ui button"
                      onClick={() => console.log(provision.name)}
                      >Select</div></td>
                <td>{provision.quantity}</td>
                <td>{provision.name}</td>
                <td>${provision.price}</td>
                <td>{provision.store}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

    </div>
  );
}


export default ListProvisions;