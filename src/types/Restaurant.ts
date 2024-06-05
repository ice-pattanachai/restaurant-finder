export interface Restaurant {
  id: number;
  name: string;
  categories: string[];
  profile_image_url: string;
  images: string[];
  operation_time: {
    day: string;
    time_open: string;
    time_close: string;
  }[];
  address: string;
}
