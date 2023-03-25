import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TheLayout from '../components/common/TheLayout';
import FeedComponent from '../pages/feed/FeedComponent';
import HomeComponent from '../pages/home/HomeComponent';
import ProfileComponent from '../pages/profile/ProfileComponent';

export default function RootRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<TheLayout />}>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/:loginId" element={<ProfileComponent />} />
          <Route path="/feed" element={<FeedComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
