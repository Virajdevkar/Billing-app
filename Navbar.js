import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: 'orange', display: 'flex', height: '60px' }}>
       <ul style={{ display: 'flex', listStyleType: 'none', margin: '0', padding: '2000' }}>
        <li style={{ marginLeft: '20px' , paddingTop:'20px'}}><a href="/Home" style={{ fontSize: '18px' }}>Home</a></li>
        <li style={{ marginLeft: '20px' , paddingTop:'20px'}}><a href="/Invoices" style={{ fontSize: '18px' }}>Invoices</a></li>
        <li style={{ marginLeft: '10px' , paddingTop:'20px'}}><a href="/customers" style={{ fontSize: '18px' }}>Customers</a></li>
        <li style={{ marginLeft: '20px' , paddingTop:'20px'}}><a href="/Products" style={{ fontSize: '18px' }}>Products</a></li>
        <li style={{ marginLeft: '20px' , paddingTop:'20px'}}><a href="/Reports" style={{ fontSize: '18px' }}>Reports</a></li>
        <li style={{ marginLeft: '20px' , paddingTop:'20px'}}><a href="/Settings" style={{ fontSize: '18px' }}>Settings</a></li>
      
      </ul>
    </nav>
  );
};

export default Navbar;
