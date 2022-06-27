import { FC, Fragment } from 'react';
import { Route, Navigate } from 'react-router-dom';

import useAuth from '../providers/auth/useAuth';
import RequireAuth from '../RequireAuth';

interface IPrivateRoute {
  path: string;
  element: JSX.Element;
}

const PrivateRoute: FC<IPrivateRoute> = ({ path, element }) => {
  const { credentials } = useAuth();

  if (!credentials) {
    return <Navigate to="/signin" replace />;
  }

  return (
    <Fragment>
      <RequireAuth>
        <Route path={path} element={element} />
      </RequireAuth>
    </Fragment>
  );
};

export default PrivateRoute;
