import { loadRestaurants } from '../lib/loadData';
import RestaurantList from '../components/RestaurantList';
import { Restaurant } from '../types/Restaurant';

const Home = async () => {
  const restaurants: Restaurant[] = loadRestaurants();

  return (
    <div className="container">
      <RestaurantList restaurants={restaurants} />
    </div>
  );
};

export default Home;