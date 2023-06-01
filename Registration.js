[4:09 PM, 6/1/2023] $:-:@:-:&0?: import React, { useState } from 'react';

const Registration = () => {
  const [userType, setUserType] = useState('');
  const [orderID, setOrderID] = useState('');
  const [to, setTo] = useState('');
  const [from, setFrom] = useState('');
  const [quantity, setQuantity] = useState('');
  const [address, setAddress] = useState('');
  const [transporter, setTransporter] = useState('');
  const [price, setPrice] = useState('');

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here based on selected user type
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>
          User Type:
          <select value={userType} onChange={handleUserTypeChange}>
            <option value="">Select User Type</option>
            <option value="manufacturer">Manufacturer</option>
            <option value="transporter">Transporter</option>
          </select>
        </label>
        {userType === 'manufacturer' && (
          <div>
            <label>
              Order ID:
              <input
                type="text"
                value={orderID}
                onChange={(e) => setOrderID(e.target.value)}
              />
            </label>
            <label>
              To:
              <input
                type="text"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
            </label>
            <label>
              From:
              <input
                type="text"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </label>
            <label>
              Quantity:
              <select
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              >
                <option value="">Select Quantity</option>
                <option value="1">1 ton</option>
                <option value="2">2 ton</option>
                <option value="3">3 ton</option>
              </select>
            </label>
            <label>
              Address:
              <input
                type="text"
                value={
[4:09 PM, 6/1/2023] $:-:@:-:&0?: address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </label>
            <label>
              Transporter:
              <select
                value={transporter}
                onChange={(e) => setTransporter(e.target.value)}
              >
                <option value="">Select Transporter</option>
                <option value="transporter1">Transporter 1</option>
                <option value="transporter2">Transporter 2</option>
                <option value="transporter3">Transporter 3</option>
              </select>
            </label>
          </div>
        )}
        {userType === 'transporter' && (
          <div>
            <label>
              Order ID:
              <input
                type="text"
                value={orderID}
                onChange={(e) => setOrderID(e.target.value)}
              />
            </label>
            <label>
              Price:
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
          </div>
        )}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;