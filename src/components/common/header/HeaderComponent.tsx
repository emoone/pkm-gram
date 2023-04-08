import { Link } from 'react-router-dom';
import { Compass, Heart, Search, User } from '../../../uis/icons';

import cn from 'clsx';

export default function HeaderComponent() {
  return (
    <header className="headerCon">
      <nav
        className={cn(
          'contentInner flex flex-wrap justify-center items-center px-20 border-b-[1px] border-[#e6e6e6] h-76 sticky top-0',
          'md:px-100 md:justify-between',
        )}>
        {/* logoArea */}
        <div className="logo w-[176px]">
          <a href="/">
            <div className="logo">
              <img src="/images/logo/logo.png" alt="" />
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
