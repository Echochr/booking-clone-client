import axios from 'axios';

const fetchData = async (path: string) => {
  return axios.get(path).then(({ data }) => data);
};

export async function getPropertyCountByCity() {
  const query = new URLSearchParams();
  query.set('cities', 'Barcelona,London,Bali');
  return fetchData(`./hotels/countByCity?${query.toString()}`);
}
