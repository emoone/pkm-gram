import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom';

export default function TheLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
