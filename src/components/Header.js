import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="ui secondary pointing menu" >
      <Link to="/" className="item" >
        Groceries
      </Link>
      <div className="right menu">
        <Link to="/provision/new" className="item" >
          Add Grocery Item
        </Link>
      </div>
    </div>
  );
}

export default Header;