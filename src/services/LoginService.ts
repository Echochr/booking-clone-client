import axios from 'axios';

import { BASE_URL } from '../constants/ApiUrl';
import { ICredentials, IUser } from '../providers/auth/AuthContext';
import { setCredentials, resetCredentials } from './AuthService';

const config = {
  withCredentials: true,
};

export async function httpLoginUser(user: IUser): Promise<ICredentials> {
  const { status, data } = await axios.post(BASE_URL + '/auth/login', user, config);

  if (status === 200) {
    setCredentials(data.id, data.isAdmin);
    return Promise.resolve({ id: data.id, isAdmin: data.isAdmin });
  }
  return Promise.reject();
}

export async function httpLogoutUser() {
  await axios.get(BASE_URL + '/auth/logout', config);
  resetCredentials();
}
