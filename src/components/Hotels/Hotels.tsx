import React, { FC } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import useAuth from '../../providers/auth/useAuth';

const Hotels: FC = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  const handleClick = async () => {
    const res = await axios.get('./hotels/');
    console.log(res.data);
  };

  const handleLogout = () => {
    signout(() => navigate('/signin'));
  };

  return (
    <>
      <h1>Hotel Page</h1>
      <button type="button" onClick={handleClick}>
        Show hotel data
      </button>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default Hotels;
