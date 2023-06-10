import { Route, Routes } from 'react-router-dom';

import { ApiTest } from '../pages/apiTest';
import { ErrorComponent } from '../pages/error';
import HomeComponent from '../pages/home/HomeComponent';
import LoginComponent from '../pages/login/LoginComponent';
import PrivateRoute from './PrivateRoute';
import ProfileComponent from '../pages/profile/ProfileComponent';
import JoinUpComponent from '../pages/joinUp/JoinUpComponent';
import TheLayout from '../components/common/TheLayout';

export default function RootRoutes() {
  return (
    <Routes>
      <Route element={<TheLayout />}>
        <Route path="/" element={<HomeComponent />} />

        <Route element={<PrivateRoute authentication={false} />}>
          <Route path="/account/login" element={<LoginComponent />} />
          <Route path="/account/emailsignup" element={<JoinUpComponent />} />
        </Route>
        <Route element={<PrivateRoute authentication={true} />}>
          <Route path="/account/:loginId" element={<ProfileComponent />} />
        </Route>

        <Route path="/test" element={<ApiTest />} />
        <Route path="/*" element={<ErrorComponent.NoFound />} />
      </Route>
    </Routes>
  );
}
