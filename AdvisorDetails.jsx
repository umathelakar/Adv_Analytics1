// AdvisorDetails.jsx

import React from 'react';

const AdvisorDetails = ({ advisor, advisorName }) => {
  return (
    <div className="advisor-details">
      <h2>Advisor Details</h2>
      {advisor ? (
        <div>
          <p>Advisor Name: {advisorName}</p>
          <p>Rep Code: {advisor.rep_code}</p>
          <p>Employee ID: {advisor.emp_id}</p>
          <p>Customers:</p>
          <table className="customer-table">
            <thead>
              <tr>
                <th>Customer Name</th>
              </tr>
            </thead>
            <tbody>
              {advisor.customers.map((customer, index) => (
                <tr key={index}>
                  <td>{customer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No advisor data found</p>
      )}
    </div>
  );
};

export default AdvisorDetails;


////////////////////////////////////////////////////////
// AdvisorDetails.jsx

import React from 'react';

const AdvisorDetails = ({ advisor }) => {
  return (
    <div className="advisor-details">
      <h2>Advisor Details</h2>
      {advisor ? (
        <div>
          <p>Advisor Name: {advisor.name}</p>
          <p>Rep Code: {advisor.rep_code}</p>
          <p>Employee ID: {advisor.emp_id}</p>
          <p>Customers:</p>
          <table>
            <thead>
              <tr>
                <th>Customer Name</th>
              </tr>
            </thead>
            <tbody>
              {advisor.customers.map((customer, index) => (
                <tr key={index}>
                  <td>{customer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No advisor data found</p>
      )}
    </div>
  );
};

export default AdvisorDetails;
