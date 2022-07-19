import axios from 'axios';

import { IUser } from '../providers/auth/AuthContext';

export async function httpRegisterNewUser(newUser: IUser) {
  await axios.post('/auth/register', newUser);
}
