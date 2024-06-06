'use client';

import { useState } from 'react';
import { Card, Typography, CardMedia, Grid, TextField, MenuItem, Select, Box, Pagination } from '@mui/material';
import { Restaurant } from '../../types/Restaurant';
import classes from './index.module.css';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CircleIcon from '@mui/icons-material/Circle';

interface RestaurantListProps {
  restaurants: Restaurant[];
}

const categories = ['Restaurant', 'Bakery', 'Cafe'];

const RestaurantList: React.FC<RestaurantListProps> = ({ restaurants }) => {
  const [filter, setFilter] = useState('');
  const [category, setCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(filter.toLowerCase()) &&
    (category === '' || restaurant.categories.includes(category.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredRestaurants.length / itemsPerPage);
  const paginatedRestaurants = filteredRestaurants.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

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
        {paginatedRestaurants.map((restaurant) => (
          <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
            <Box sx={{ backgroundColor: 'white', padding: 2, borderRadius: 4, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
              <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxShadow: 'none' }}>
                <Box sx={{ paddingLeft: 1, paddingRight: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', paddingBlockEnd: 2 }}>

                    {/* image */}
                    <CardMedia
                      component="img"
                      style={{ width: 80, height: 80, borderRadius: '10%', objectFit: 'cover', marginRight: 2 }}
                      image={restaurant.profile_image_url}
                      alt={restaurant.name}
                    />

                    <Box sx={{ flex: 1, paddingLeft: 1 }}>

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
                          <CircleIcon sx={{ marginRight: 1 }} className={classes.circleIcon} />
                          <Typography variant="body1" className={`${classes.circleIcon}, ${classes.custom_textfield_bold}`}>
                            {restaurant.rating}
                          </Typography>
                        </Box>

                      </Box>
                    </Box>
                  </Box>
                  <Grid container>
                    {restaurant.images.slice(0, 3).map((image, index) => (
                      <Grid item key={index} xs={4}>
                        <CardMedia
                          component="img"
                          height="130"
                          image={image}
                          style={{
                            borderRadius: index === 0
                              ? '10px 0 0 10px'
                              : index === 2
                                ? '0 10px 10px 0'
                                : '0',
                            objectFit: 'cover'
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

      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          siblingCount={0}
          boundaryCount={2}
          variant="outlined"
          color="primary"
          sx={{
            '& .MuiPaginationItem-root': {
              borderColor: 'var(--t-blue1)',
            },
            '& .MuiPaginationItem-outlined:hover': {
              borderColor: 'var(--t-blue1)',
            },
            '& .Mui-selected': {
              borderColor: 'var(--t-blue2)',
              backgroundColor: 'var(--t-blue2)',
              color:  'var(--t-w)',
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default RestaurantList;
