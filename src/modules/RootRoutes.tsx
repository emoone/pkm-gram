import { Navigate, Route, Routes } from 'react-router-dom';

import { ApiTest } from '../pages/apiTest';
import HomeComponent from '../pages/home/HomeComponent';
import LoginComponent from '../pages/login/LoginComponent';
import PrivateRoute from './PrivateRoute';
import ProfileComponent from '../pages/profile/ProfileComponent';
import SignupComponent from '../pages/signUp/SignupComponent';
import TheLayout from '../components/common/TheLayout';
import { UserSession } from '../utils/UserSession';

export default function RootRoutes() {
  return (
    <Routes>
      <Route element={<TheLayout />}>
        <Route path="/" element={<HomeComponent />} />

        <Route element={<PrivateRoute authentication={false} />}>
          <Route path="/account/login" element={<LoginComponent />} />
          <Route path="/account/emailsignup" element={<SignupComponent />} />
        </Route>
        {/* <Route path="/account/login" element={<LoginComponent />} /> */}

        <Route path="/account/:loginId" element={<ProfileComponent />} />
        <Route path="/test" element={<ApiTest />} />
      </Route>
    </Routes>
  );
}
