import {RouteObject} from 'react-router-dom';
import LoginPage from './../pages/authentication/LoginPage';

const AuthRouter: RouteObject[] = [
  {
    path: '/login',
    Component: LoginPage,
  },
  // {
  // 	path: '/register',
  // 	Component: LoginPage,
  // },
  // {
  // 	path: '/forgot-password',
  // 	Component: ForgotPasswordPage,
  // },
  // {
  // 	path: '/reset-password/:token',
  // 	element: <ResetPasswordPage />,
  // },
  {
    index: true,
    Component: LoginPage,
  },
];

export default AuthRouter;
