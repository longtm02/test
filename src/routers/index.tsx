import NotFoundPage from './../pages/error/NotFoundPage';
import {createBrowserRouter, redirect} from 'react-router-dom';
import AuthRouter from './auth';
import DashboardRouter from './dashboard';

const mainLoader = (): any => {
  const user = localStorage.getItem('user');
  return user ? true : redirect('/login');
};

const authLoader = (loader: any): any => {
  const user = localStorage.getItem('user');
  return user ? redirect('/dashboard') : false;
};

const router = createBrowserRouter([
  {
    path: '/',
    // element: <AuthLayout />,
    loader: authLoader,
    children: [...AuthRouter],
  },
  {
    path: '/',
    // element: <MainLayout />,
    loader: mainLoader,
    children: [...DashboardRouter],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;
