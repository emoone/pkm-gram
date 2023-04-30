import { Route, Routes } from 'react-router-dom';

import HomeComponent from '../pages/home/HomeComponent';
import LoginComponent from '../pages/login/LoginComponent';
import ProfileComponent from '../pages/profile/ProfileComponent';
import SignupComponent from '../pages/signUp/SignupComponent';
import TheLayout from '../components/common/TheLayout';

export default function RootRoutes() {
  return (
    <Routes>
      <Route element={<TheLayout />}>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/account/login" element={<LoginComponent />} />
        <Route path="/account/emailsignup" element={<SignupComponent />} />
        <Route path="/account/:loginId" element={<ProfileComponent />} />
      </Route>
    </Routes>
  );
}
