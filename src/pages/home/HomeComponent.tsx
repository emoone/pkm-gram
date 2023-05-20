import { useEffect } from 'react';
import getBaseData from '../../modules/api/getBaseData';
import { HomeMain } from './views/HomeMain';

export default function HomeComponent() {
  useEffect(() => {
    getBaseData();
    // console.log('home');
  }, []);

  return (
    <div className="homeMainCon max-w-[600px] flex flex-col gap-10 mx-auto my-14 -tracking-[1px]">
      <HomeMain />
    </div>
  );
}
