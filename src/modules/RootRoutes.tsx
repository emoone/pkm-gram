import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TheLayout from '../components/common/TheLayout';
import ProfileComponent from '../pages/profile/ProfileComponent';
import HomeComponent from '../pages/home/HomeComponent';
import LoginComponent from '../pages/login/LoginComponent';

export default function RootRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<TheLayout />}>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/account/login" element={<LoginComponent />} />
          <Route path="/account/:loginId" element={<ProfileComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
