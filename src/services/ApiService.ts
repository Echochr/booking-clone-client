import axios from 'axios';

const fetchData = async (path: string) => {
  return axios.get(path).then(({ data }) => data);
};

export async function getPropertyCountByCity() {
  const query = new URLSearchParams();
  query.set('cities', 'Barcelona,London,Bali');
  return fetchData(`./hotels/countByCity?${query.toString()}`);
}

export async function getPropertyCountByType() {
  const query = new URLSearchParams();
  query.set('types', 'Hotel,Apartment,Resort,Villas');
  return fetchData(`./hotels/countByType?${query.toString()}`);
}

export async function getAllFeaturedHotels() {
  return fetchData('./hotels/featured');
}
