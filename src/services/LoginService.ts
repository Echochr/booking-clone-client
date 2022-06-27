import axios from 'axios';

import { ICredentials, IUser } from '../providers/auth/AuthContext';
import { setCredentials, resetCredentials } from './AuthService';

export async function httpLoginUser(newUser: IUser): Promise<ICredentials> {
  const { status, data } = await axios.post('./auth/login', newUser);

  if (status === 200) {
    setCredentials(data.id, data.isAdmin);
    return Promise.resolve({ id: data.id, isAdmin: data.isAdmin });
  }
  return Promise.reject();
}

export async function httpLogoutUser() {
  await axios.get('./auth/logout');
  resetCredentials();
}
