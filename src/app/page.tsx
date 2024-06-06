import { loadRestaurants } from '../lib/loadData';
import RestaurantList from '../components/RestaurantList';
import { Restaurant } from '../types/Restaurant';
import ResponsiveAppBar from '../components/Navbar';
import AppSidebar from '../components/Sidebar';
import { Box } from '@mui/material';


const Home = async () => {
  const restaurants: Restaurant[] = loadRestaurants();

  return (
    <Box>
      <ResponsiveAppBar />
      <Box className="container " sx={{ display: 'flex', flexDirection: 'row', minHeight: '100vh' }}>
        <AppSidebar />
        <RestaurantList restaurants={restaurants} />
      </Box>
    </Box>
    
  );
};

export default Home;