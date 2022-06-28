import React, { FC } from 'react';

import Navbar from '../components/Navbar';
import Header from '../components/Header';

const Skeleton: FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Header />
      {children}
    </>
  );
};

export default Skeleton;
