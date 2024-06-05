'use client';

import { useState } from 'react';
import { Card, CardContent, Typography, CardMedia, Grid, TextField, MenuItem, Select, Box } from '@mui/material';
import { Restaurant } from '../types/Restaurant';
import SearchIcon from '@mui/icons-material/Search';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';

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
    <Box sx={{ padding: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value as string)}
          displayEmpty
          variant="outlined"
          sx={{ marginRight: 2 }}
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
        <TextField
          placeholder="Search name..."
          variant="outlined"
          fullWidth
          onChange={(e) => setFilter(e.target.value)}
          InputProps={{
            startAdornment: <SearchIcon />
          }}
        />
      </Box>
      <Grid container spacing={3}>
        {filteredRestaurants.map((restaurant) => (
          <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
            <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <Box>
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
                  <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                    <AccessTimeIcon sx={{ marginRight: 1 }} />
                    <Typography variant="body2" color="text.secondary">
                      {restaurant.operation_time[0].time_open} - {restaurant.operation_time[0].time_close}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <StarIcon sx={{ color: 'gold', marginRight: 1 }} />
                    <Typography variant="body2" color="text.secondary">
                      {restaurant.rating}
                    </Typography>
                  </Box>
                </CardContent>
              </Box>
              <Box>
                <CardMedia
                  component="img"
                  height="80"
                  image={restaurant.images[0]}
                  alt="Restaurant image"
                  sx={{ marginTop: 'auto' }}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RestaurantList;
