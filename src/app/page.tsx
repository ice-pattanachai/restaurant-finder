import { loadRestaurants } from '../lib/loadData';
import RestaurantList from '../components/RestaurantList';
import { Restaurant } from '../types/Restaurant';
import ResponsiveAppBar from '../components/Navbar';


const Home = async () => {
  const restaurants: Restaurant[] = loadRestaurants();

  return (
    <div className="container">
      <ResponsiveAppBar />
      <RestaurantList restaurants={restaurants} />
    </div>
  );
};

export default Home;