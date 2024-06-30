// AdvisorDetails.jsx

import React from 'react';

const AdvisorDetails = ({ advisor }) => {
  return (
    <div className="advisor-details">
      <h2>Advisor Details</h2>
      {advisor ? (
        <div>
          <p>Advisor Name: {advisor.name}</p>
          <p>Rep Code: {advisor.repCode}</p>
          <p>Employee ID: {advisor.empId}</p>
          <p>Customers:</p>
          <ul>
            {advisor.customers.map((customer, index) => (
              <li key={index}>{customer}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No advisor data found</p>
      )}
    </div>
  );
};

export default AdvisorDetails;

