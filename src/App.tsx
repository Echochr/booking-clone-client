import { BrowserRouter } from 'react-router-dom';

import AuthProvider from './providers/auth/AuthProvider';
import Routes from './routes/Routes';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AuthProvider>
  );
}
