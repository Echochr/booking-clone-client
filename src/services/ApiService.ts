import axios from 'axios';

import { BASE_URL } from '../constants/ApiUrl';
import { IHotelQuery } from '../components/Hotels';
import { IHotel } from '../interface/hotels.interface';
import { IUpdatePayload } from '../interface/dto.interface';

const config = {
  withCredentials: true,
};

const fetchData = async (path: string) => {
  return axios.get(BASE_URL + path).then(({ data }) => data);
};

const postData = async (path: string, payload: any) => {
  return axios.post(BASE_URL + path, payload, config).then(({ data }) => data);
};

const updateData = async (path: string, payload: any) => {
  return axios.put(BASE_URL + path, payload, config).then(({ data }) => data);
};

const deleteData = async (path: string) => {
  return axios.delete(BASE_URL + path, config).then(({ data }) => data);
}

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

export async function createNewProperty(hotel: IHotel) {
  return postData('/hotels', hotel);
}

export async function updateProperty(payload: IUpdatePayload) {
  return updateData(`/hotels/${payload.id}`, payload.hotel);
}

export async function deleteProperty(id: string) {
  return deleteData(`/hotels/${id}`);
}
