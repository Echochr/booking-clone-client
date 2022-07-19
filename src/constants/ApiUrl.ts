const PROD_API_URL = 'https://booking-clone-server.herokuapp.com/api/v1';
const DEV_API_URL = 'http://localhost:4000/api/v1';

export const BASE_URL = process.env.NODE_ENV === 'production' ? PROD_API_URL : DEV_API_URL;
