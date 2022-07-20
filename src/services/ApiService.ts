import axios from 'axios';

import { BASE_URL } from '../constants/ApiUrl';
import { IHotelQuery } from '../components/Hotels';

const fetchData = async (path: string) => {
  return axios.get(BASE_URL + path).then(({ data }) => data);
};

export async function getPropertyCountByCity() {
  const query = new URLSearchParams();
  query.set('cities', 'Barcelona,London,Bali');
  return fetchData(`/hotels/countByCity?${query.toString()}`);
}

export async function getPropertyCountByType() {
  const query = new URLSearchParams();
  query.set('types', 'Hotel,Apartment,Resort,Villas');
  return fetchData(`/hotels/countByType?${query.toString()}`);
}

export async function getAllHotels(hotelQuery: IHotelQuery) {
  const query = new URLSearchParams();
  const { city, min, max } = hotelQuery;
  query.set('min', min.toString());
  query.set('max', max.toString());
  if (city) query.set('city', city);
  return fetchData(`/hotels?${query.toString()}`);
}

export async function getHotelById(hotelId: string) {
  return fetchData(`/hotels/find/${hotelId}`);
}

export async function getAllFeaturedHotels() {
  return fetchData('/hotels?featured=true&limit=4&sort=city');
}
