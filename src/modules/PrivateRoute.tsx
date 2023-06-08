import { Navigate, Outlet } from 'react-router-dom';
import { RootState, store } from './store';

import { ReactElement } from 'react';
import { useSelector } from 'react-redux';

interface PrivateRouteProps {
  children?: ReactElement;
  authentication: boolean;
}

export default function PrivateRoute({
  authentication,
}: PrivateRouteProps): React.ReactElement | null {
  const token = useSelector((state: RootState) => state.auth.accessToken);

  /**
   * token 없을경우 : null 반환
   */
  if (authentication) {
    // token이 꼭 필요한 페이지
    // token없을 경우 로그인 페이지로, 있을 경우 해당 페이지로
    return !token ? <Navigate to="/account/login" /> : <Outlet />;
  } else {
    // token이 꼭 필요 없는 페이지
    return !token ? <Outlet /> : <Navigate to="/" />;
  }
}
