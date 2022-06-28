import React, { FC, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../components/Home';

const Router: FC = () => {

  return (
    <Suspense fallback={<div />}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
