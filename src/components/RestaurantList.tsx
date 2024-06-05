'use client';

import { useState } from 'react';
import { Card, CardContent, Typography, CardMedia, Grid, TextField, MenuItem, Select } from '@mui/material';
import { Restaurant } from '../types/Restaurant';

interface RestaurantListProps {
  restaurants: Restaurant[];
}

const categories = ['Restaurant', 'Bakery', 'Cafe'];

const RestaurantList: React.FC<RestaurantListProps> = ({ restaurants }) => {
  const [filter, setFilter] = useState('');
  const [category, setCategory] = useState('');

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(filter.toLowerCase()) &&
    (category === '' || restaurant.categories.includes(category.toLowerCase()))
  );

  return (
    <div>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setFilter(e.target.value)}
      />
      <Select
        value={category}
        onChange={(e) => setCategory(e.target.value as string)}
        displayEmpty
        fullWidth
      >
        <MenuItem value="">
          <em>All</em>
        </MenuItem>
        {categories.map((cat) => (
          <MenuItem key={cat} value={cat.toLowerCase()}>
            {cat}
          </MenuItem>
        ))}
      </Select>
      <Grid container spacing={4}>
        {filteredRestaurants.map((restaurant) => (
          <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={restaurant.profile_image_url}
                alt={restaurant.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {restaurant.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {restaurant.address}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default RestaurantList;
