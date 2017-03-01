import React from 'react';


const Header = (props) => {
  const { logout } = props;

  return (
    <div className='site-title header'>
      <h2>Real Estate Dashboard</h2>
      <button
        id='logout'
        onClick={(e) => logout(e)}
      >Logout
      </button>
    </div>
  );
};

module.exports = Header;
