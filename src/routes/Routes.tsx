import React, { FC, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Skeleton from '../layouts/Skeleton';
import Home from '../components/Home'; 
import Hotel from '../components/Hotels';
import NotFound from '../components/NotFound';

const Router: FC = () => {
  return (
    <Skeleton>
      <Suspense fallback={<div />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotel />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Skeleton>
  );
};

export default Router;
