import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import UserCard from '../components/UserCard';
import { Container, Typography } from '@mui/material';

const Home = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (username) => {
    try {
      setError('');
      setUser(null);
// Replace the API endpoint with the backend service name
const response = await axios.get(`http://localhost:5000/api/users/${username}`);
      setUser(response.data);
      console.log(response.data)
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError('User not found');
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <Container maxWidth="md" style={{ paddingTop: '50px', textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom>
        GitHub User Search
      </Typography>
      <SearchBar onSearch={handleSearch} />
      {error && <Typography color="error">{error}</Typography>}
      {user && <UserCard user={user} />}
    </Container>
  );
};

export default Home;
