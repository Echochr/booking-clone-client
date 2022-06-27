import { FC, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import RequireAuth from '../RequireAuth';
import Signin from '../Signin';
import Hotel from '../Hotel';

const Router: FC = () => {

  return (
    <Suspense fallback={<div />}>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/hotel"
          element={
            <RequireAuth>
              <Hotel />
            </RequireAuth>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default Router;
