import React from 'react';

const ListProvisions = ({provisions}) => {
  return (
    <div>
      <h3>Grocery List</h3>
      <table className="ui celled table unstackable">
        <thead>
          <tr>
            <th>Select</th>
            <th>Name</th>
            <th>Price</th>
            <th>Store</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {provisions.map(provision => {
            return (
              <tr key={provision.id}>
                <td>
                  <div
                    className="ui button primary"
                    onClick={() => console.log(provision.name)}
                    >
                    Select
                  </div>
                </td>
                <td style={{highlight: "bold"}}>{provision.name}</td>
                <td>${provision.price}</td>
                <td>{provision.store}</td>
                <td>
                  <div onClick={() => console.log(provision.price)}>
                    <i className="pencil alternate icon"></i>
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