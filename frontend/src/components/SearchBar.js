import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === '') return;
    onSearch(username);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <TextField
        label="GitHub Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ width: '300px' }}
      />
      <Button type="submit" variant="contained" color="primary" style={{ marginLeft: '10px', height: '56px' }}>
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
