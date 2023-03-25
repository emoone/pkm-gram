import Footer from './footer/Footer';
import Header from './header/HeaderComponent';
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
