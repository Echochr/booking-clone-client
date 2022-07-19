import axios from 'axios';

import { BASE_URL } from '../constants/ApiUrl';
import { IUser } from '../providers/auth/AuthContext';

export async function httpRegisterNewUser(newUser: IUser) {
  await axios.post(BASE_URL + '/auth/register', newUser);
}
