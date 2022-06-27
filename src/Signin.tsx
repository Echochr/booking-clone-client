import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useAuth from './providers/auth/useAuth';
import { IUser } from './providers/auth/AuthContext';

const Signin: FC = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const formData = new FormData(evt.currentTarget);
    const user: IUser = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };

    try {
      signin(user, () => navigate('/hotel', { replace: true }));
    } catch (err) {
      setError(true);
    }
  };

  return (
    <>
      <h2>SIGN IN PAGE</h2>
      {error && <p>Login failed</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Email: <input type="email" name="email" required />
        </label>
        <label>
          Password: <input type="password" name="password" required />
        </label>
        <button type="submit">Sign in</button>
      </form>
    </>
  );
};

export default Signin;
