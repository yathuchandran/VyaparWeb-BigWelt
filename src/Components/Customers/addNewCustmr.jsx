import React, { useState } from 'react';
import { 
  TextField, 
  Button, 
  MenuItem, 
  Select, 
  InputLabel, 
  FormControl, 
  Snackbar, 
  Alert,
  Container,
  Typography
} from '@mui/material';

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
    <Container maxWidth="sm" style={{ padding: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
        <Typography variant="h4">
          Add New Customer
        </Typography>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleImportCustomers}
          startIcon={<span style={{ marginRight: '8px' }}>📥</span>}
          style={{ borderRadius: '8px', backgroundColor: '#00BFA6' }}
        >
          Import Customers
        </Button>
      </div>

      <div style={{ backgroundColor: '#f5f5f5', padding: '16px', borderRadius: '8px' }}>
        <FormControl fullWidth style={{ marginBottom: '16px' }}>
          <TextField
            label="Customer Name"
            value={customerName}
            onChange={handleCustomerNameChange}
            placeholder="Enter customer name"
          />
        </FormControl>

        <FormControl fullWidth style={{ marginBottom: '16px' }}>
          <TextField
            label="Contact Number"
            value={contactNumber}
            onChange={handleContactNumberChange}
            placeholder="Contact number"
          />
        </FormControl>

        <FormControl fullWidth style={{ marginBottom: '16px' }}>
          <InputLabel>Group</InputLabel>
          <Select
            value={selectedGroup}
            onChange={handleGroupChange}
            renderValue={(selected) => selected || 'Select a group'}
          >
            
            <MenuItem value="add-new">Add New Group</MenuItem>
          </Select>
        </FormControl>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
          <Button 
            variant="contained" 
            onClick={handleSaveAndNew}
            style={{ borderRadius: '8px', backgroundColor: '#00BFA6', color: '#fff' }}
          >
            Save & New
          </Button>
          <Button 
            variant="contained" 
            onClick={handleSaveCustomer}
            style={{ borderRadius: '8px', backgroundColor: '#00BFA6', color: '#fff' }}
          >
            Save Customer
          </Button>
        </div>
      </div>

      {successMessage && (
        <Snackbar
          open={Boolean(successMessage)}
          autoHideDuration={6000}
          onClose={() => setSuccessMessage('')}
        >
          <Alert onClose={() => setSuccessMessage('')} severity="success">
            {successMessage}
          </Alert>
        </Snackbar>
      )}
    </Container>
  );
};

export default AddCustomerForm;