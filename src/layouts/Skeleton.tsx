import React, { FC } from 'react';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Newsletter from '../components/Newsletter';
import Sitemap from '../components/Sitemap';

const Skeleton: FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Header />
      {children}
      <Newsletter />
      <Sitemap />
    </>
  );
};

export default Skeleton;
