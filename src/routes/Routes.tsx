import React, { FC, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Skeleton from '../layouts/Skeleton';
import ProtectedOutlet from './ProtectedOutlet';
import Home from '../components/Home';
import Hotels from '../components/Hotels';
import Hotel from '../components/Hotel';
import NotFound from '../components/NotFound';
import Register from '../components/Register';
import Signin from '../components/Signin';
import NewProperty from '../components/NewProperty';

const Router: FC = () => {
  return (
    <>
      <Skeleton>
        <Suspense fallback={<div />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/hotels" element={<ProtectedOutlet />}>
              <Route path="new" element={<NewProperty />} />
            </Route>
            <Route path="/hotel/:id" element={<Hotel />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Skeleton>
      <ToastContainer />
    </>
  );
};

export default Router;
