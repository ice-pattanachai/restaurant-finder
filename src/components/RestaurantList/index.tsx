'use client';

import { useState } from 'react';
import { Card, CardContent, Typography, CardMedia, Grid, TextField, MenuItem, Select, Box, InputAdornment } from '@mui/material';
import { Restaurant } from '../../types/Restaurant';
import SearchIcon from '@mui/icons-material/Search';
import classes from './index.module.css'

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CircleIcon from '@mui/icons-material/Circle';

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
        <Grid container alignItems="center" className={classes.search_bar}>
          <Grid item>
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value as string)}
              displayEmpty
              variant="outlined"
              sx={{
                borderRadius: '50px',
                width: '200px',
                height: '50px',
                background: '#fff',
                borderColor: 'var(--t-blue1)',
                '&:hover': {
                  borderColor: 'var(--t-blue1)',
                },
                '&.Mui-focused': {
                  borderColor: 'var(--t-blue2)',
                },
                '& .MuiOutlinedInput-input': {
                  padding: '14px 20px', 
                },
              }}
            >
              <MenuItem value="">
                <p>All</p>
              </MenuItem>

              {categories.map((cat) => (
                <MenuItem key={cat} value={cat.toLowerCase()}>
                  {cat}
                </MenuItem>
              ))}
            </Select>

          </Grid>

          <Grid item>
            <span style={{ margin: '0 8px', color:'var(--t-blue1)'}}>|</span>
          </Grid>

          <Grid item>
            <TextField
              placeholder="Search name..."
              variant="outlined"
              fullWidth
              onChange={(e) => setFilter(e.target.value)}
              className={classes.search_bar}
              InputProps={{
                style: {
                  borderRadius: '50px',
                  width: '400px',
                  height: '50px',
                  background: '#fff',
                  marginLeft: 'auto',
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'var(--t-blue1)', 
                  },
                  '&:hover fieldset': {
                    borderColor: 'var(--t-blue1)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'var(--t-blue2)',
                  },
                },
              }}
            />
          </Grid>
    </Grid>
      </Box>

      <Grid container spacing={3}>
        {filteredRestaurants.map((restaurant) => (
          <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
            <Box sx={{ backgroundColor: 'white', padding: 2, borderRadius: 4 , boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'}}>
              <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' , boxShadow: 'none'}}>
                <Box sx={{ paddingLeft: 1, paddingRight: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' , paddingBlockEnd :2}}>

                    {/* image */}
                    <CardMedia
                      component="img"
                      style={{ width: 80, height: 80, borderRadius: '10%', objectFit: 'cover', marginRight: 2 }} // ใช้ object-fit เพื่อไม่ให้บีบภาพ
                      image={restaurant.profile_image_url}
                      alt={restaurant.name}
                    />

                    <Box sx={{ flex: 1 , paddingLeft: 1, }}>

                      {/* text */}
                      <Typography gutterBottom variant="h5" component="div">
                        {restaurant.name}
                      </Typography>

                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 1 }}>

                        {/* time */}
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <CalendarMonthIcon sx={{ marginRight: 1 }} />
                          <Typography variant="body1" className={` ${classes.custom_textfield_bold}`}>
                            {restaurant.operation_time[0].time_open} - {restaurant.operation_time[0].time_close}
                          </Typography>
                        </Box>
                        
                        {/* score /5 */}
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <CircleIcon sx={{  marginRight: 1 }} className={classes.circleIcon} />
                          <Typography variant="body1" className={`${classes.circleIcon} , ${classes.custom_textfield_bold}`}>
                            {restaurant.rating}
                          </Typography>
                        </Box>

                      </Box>
                    </Box>
                  </Box>
                    <Grid container >
                      {restaurant.images.slice(0, 3).map((image, index) => (
                        <Grid item key={index} xs={4}>
                          <CardMedia
                            component="img"
                            height="130"
                            image={image}
                            style={{
                              borderRadius: index === 0 
                                ? '10px 0 0 10px' // มุมบนซ้ายและล่างซ้าย
                                : index === 2 
                                ? '0 10px 10px 0' // มุมบนขวาและล่างขวา
                                : '0', // ภาพตรงกลางไม่มีขอบโค้ง
                              objectFit: 'cover' // ป้องกันการบีบภาพ
                            }}
                            alt={`Restaurant image ${index}`}
                          />
                        </Grid>
                      ))}
                    </Grid>
        
                </Box>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RestaurantList;
