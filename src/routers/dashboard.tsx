import {RouteObject} from 'react-router-dom';
import LoginPage from './../pages/authentication/LoginPage';
import DashboardPage from './../pages/dashboard/DashboardPage';

const DashboardRouter: RouteObject[] = [
  {
    path: '/dashboard',
    Component: DashboardPage,
  },
  {
    index: true,
    Component: LoginPage,
  },
];

export default DashboardRouter;
