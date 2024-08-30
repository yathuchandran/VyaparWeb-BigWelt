import React, { useState } from 'react';

const AddCustomerForm = () => {
  // State to manage form values
  const [customerName, setCustomerName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('');
  const [groups, setGroups] = useState(['Group 1', 'Group 2']); // Default groups
  const [successMessage, setSuccessMessage] = useState(''); // Success message state

  // Handlers
  const handleCustomerNameChange = (e) => setCustomerName(e.target.value);
  const handleContactNumberChange = (e) => setContactNumber(e.target.value);

  const handleGroupChange = (e) => {
    if (e.target.value === 'add-new') {
      handleAddNewGroup();
    } else {
      setSelectedGroup(e.target.value);
    }
  };

  const handleAddNewGroup = () => {
    const newGroup = prompt('Enter new group name:');
    if (newGroup) {
      setGroups([...groups, newGroup]);
      setSelectedGroup(newGroup); // Select the newly added group
    }
  };

  const handleSaveAndNew = () => {
    // Logic to save the customer and reset form
    console.log('Saving customer:', { customerName, contactNumber, selectedGroup });
    setSuccessMessage('Customer saved successfully!'); // Set success message
    // Reset form fields
    setCustomerName('');
    setContactNumber('');
    setSelectedGroup('');
  };

  const handleSaveCustomer = () => {
    // Logic to save the customer
    console.log('Saving customer:', { customerName, contactNumber, selectedGroup });
    setSuccessMessage('Customer saved successfully!'); // Set success message
  };

  const handleImportCustomers = () => {
    // Logic to handle importing customers
    alert('Import Customers functionality is not implemented yet.');
  };

  return (
    <div
      className="add-customer-form"
      style={{
        margin: '150px auto',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        maxWidth: '600px',
      }}
    >
      <h3 style={{ marginBottom: '20px', fontSize: '30px', textAlign: 'center' }}>
        Add New Customer
      </h3>
      <div
        className="import-customers-button"
        style={{
          marginBottom: '20px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <button
          type="button"
          onClick={handleImportCustomers}
          style={{
            display: 'flex',
            marginTop: '15px',
            alignItems: 'center',
            padding: '10px 30px',
            marginLeft: '250px',
            border: 'none',
            backgroundColor: 'rgba(0, 0, 0, 0.911)',
            color: 'white',
            borderRadius: '10px',
            cursor: 'pointer',
            fontSize: '12px',
          }}
        >
          Import Customers
        </button>
      </div>
      <div className="input-group" style={{ marginBottom: '15px' }}>
        <label htmlFor="customerName" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Customer Name
        </label>
        <input
          id="customerName"
          type="text"
          value={customerName}
          onChange={handleCustomerNameChange}
          placeholder="Enter customer name"
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '6px',
            boxSizing: 'border-box',
          }}
        />
      </div>
      <div className="input-group" style={{ marginBottom: '15px' }}>
        <input
          id="contactNumber"
          type="text"
          value={contactNumber}
          onChange={handleContactNumberChange}
          placeholder="Contact number"
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '6px',
            boxSizing: 'border-box',
          }}
        />
      </div>
      <div className="input-group" style={{ marginBottom: '15px' }}>
        <div
          className="group-select-container"
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <select
            id="groupList"
            value={selectedGroup}
            onChange={handleGroupChange}
            style={{
              flex: '1',
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '6px',
              boxSizing: 'border-box',
            }}
          >
            <option value="" disabled>Select a group</option>
            {groups.map((group, index) => (
              <option key={index} value={group}>{group}</option>
            ))}
            <option value="add-new">Add New Group</option>
          </select>
        </div>
      </div>
      <div
        className="button-group"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <button
          type="button"
          onClick={handleSaveAndNew}
          style={{
            padding: '10px 15px',
            border: 'none',
            marginLeft: '100px',
            marginRight: '50px',
            borderRadius: '20px',
            cursor: 'pointer',
            fontSize: '16px',
            backgroundColor: '#63F7B4',
            color: 'white',
          }}
        >
          Save & New
        </button>
        <button
          type="button"
          onClick={handleSaveCustomer}
          style={{
            padding: '10px 15px',
            border: 'none',
            marginLeft: '100px',
            marginRight: '50px',
            borderRadius: '20px',
            cursor: 'pointer',
            fontSize: '16px',
            backgroundColor: '#63F7B4',
            color: 'white',
          }}
        >
          Save Customer
        </button>
      </div>
      {successMessage && (
        <div
          className="success-message"
          style={{
            marginTop: '20px',
            padding: '10px',
            backgroundColor: '#d4edda',
            color: '#155724',
            border: '1px solid #c3e6cb',
            borderRadius: '4px',
            textAlign: 'center',
          }}
        >
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default AddCustomerForm;
