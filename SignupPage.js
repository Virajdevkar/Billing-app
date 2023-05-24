import React, { useState } from 'react';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [shopName, setShopName] = useState('');
  const [shopAddress, setShopAddress] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Perform signup logic here with the form data
    // You can make an API call or implement your own signup process
    console.log('Signup form submitted!');
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Mobile Number:', mobileNumber);
    console.log('Shop Name:', shopName);
    console.log('Shop Address:', shopAddress);
    // Reset form fields
    setUsername('');
    setEmail('');
    setPassword('');
    setMobileNumber('');
    setShopName('');
    setShopAddress('');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '20px', width: '900px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Signup Page</h2>
        <form onSubmit={handleSignup}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '20px' }}>
            <div>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} style={{ width: '90%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '90%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '90%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
            </div>
            <div>
              <label htmlFor="mobileNumber">Mobile Number:</label>
              <input type="tel" id="mobileNumber" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} style={{ width: '90%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
            </div>
            <div>
              <label htmlFor="shopName">Shop Name:</label>
              <input type="text" id="shopName" value={shopName} onChange={(e) => setShopName(e.target.value)} style={{ width: '90%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
            </div>
            <div>
              <label htmlFor="shopAddress">Shop Address:</label>
              <input type="text" id="shopAddress" value={shopAddress} onChange={(e) => setShopAddress(e.target.value)} style={{ width: '90%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
            </div>
          </div>
          <button type="submit" style={{ width: '30%',alignItems:'center' ,marginLeft: '280px',marginTop:'10px' ,padding: '15px', background: 'orange', color: 'white', border: 'none', borderRadius: '5px', fontSize: '16px', fontWeight: 'bold' }}>Signup</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;



