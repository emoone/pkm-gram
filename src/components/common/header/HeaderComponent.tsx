import { Compass, Heart, Logout, Search, User } from '../../../uis/icons';
import {
  removeAccessToken,
  removeRefreshToken,
} from '../../../modules/store/userSession/userSessionReducer';
import { useDispatch, useSelector } from 'react-redux';

import { InstarGram } from '../../../uis/icons/InstarGram';
import { Link } from 'react-router-dom';
import { RootState } from '../../../modules/store';
import cn from 'clsx';
import { useCallback } from 'react';

export default function HeaderComponent() {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.accessToken);

  const logoutHandler = useCallback(() => {
    dispatch(removeAccessToken());
    dispatch(removeRefreshToken());
  }, []);

  return (
    <header className="headerCon sticky top-0 bg-white z-[2]">
      <nav
        className={cn(
          'contentInner flex flex-col justify-center gap-y-[5px] items-center px-20 border-b-[1px] border-[#e6e6e6] h-76',
          'md:px-100 md:justify-between md:flex-row',
        )}>
        {/* logoArea */}
        <div className="logo w-[103px]">
          <a href="/">
            <div className="logo">
              <InstarGram />
            </div>
          </a>
        </div>
        {/* logoArea */}
        {/* searchArea */}
        <div
          className={cn('search hidden w-full max-w-[228px] h-30', 'md:block')}>
          <div
            className={cn(
              'contentInner inline-flex items-center h-[inherit] gap-x-5 border border-solid border-[#a9a9a9] rounded-3 pl-8 bg-[#e6e6e6]',
              '[&>.search]:w-[10px]',
            )}>
            <Search />
            <input
              type="text"
              placeholder="search hear"
              className={cn(
                ' outline-none bg-transparent',
                ' focus:ring-transparent placeholder:text-[#64646]',
              )}
            />
          </div>
        </div>
        {/* searchArea */}
        {/* snbMenu */}
        <div className={cn('snbMenu flex gap-x-[30px]', '[&>.icon]:w-[24px]')}>
          {token ? (
            <button
              onClick={logoutHandler}
              type="button"
              className="inline-block">
              <Logout />
            </button>
          ) : (
            <Link to="/account/login">login</Link>
          )}

          <Link to="">
            <Compass />
          </Link>
          <Link to="/account/login">
            <Heart />
          </Link>
          <Link to="/account/profile">
            <User />
          </Link>
        </div>
        {/* snbMenu */}
      </nav>
    </header>
  );
}
