import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const UserCard = ({ user }) => {
  return (
    <Card sx={{ display: 'flex', maxWidth: 600, margin: 'auto' }}>
      <CardMedia
        component="img"
        sx={{ width: 150 }}
        image={user.avatar_url}
        alt={user.login}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {user.name ? user.name : user.login}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Username:</strong> {user.login}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Followers:</strong> {user.followers}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Following:</strong> {user.following}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Public Repos:</strong> {user.public_repos}
        </Typography>
        <Button variant="outlined" color="primary" href={user.html_url} target="_blank" rel="noopener noreferrer" sx={{ mt: 2 }}>
          View Profile
        </Button>
      </CardContent>
    </Card>
  );
};

export default UserCard;
