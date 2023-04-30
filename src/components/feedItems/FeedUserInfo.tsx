import { Link } from 'react-router-dom';
import { Menu } from '../../uis/icons';

/**
 * 계정정보 영역 id, logo, menu
 * @returns
 */
export function FeedUserInfo() {
  return (
    <section className="topFeed flex items-center h-[56px]">
      <div className="mainItem w-full inline-flex items-center gap-x-[5px] ml-[5px]">
        <Link
          to={'/account/hypebeastkr'}
          className="logo cursor-pointer w-[42px] rounded-[50%] overflow-hidden">
          <img src="/images/avatar.jpg" alt="" />
        </Link>
        <div className="userInfo">
          <div className="userId">
            <span>userId</span>{' '}
            {true && (
              <div className="timeInfo inline-block text-[#a8a8a8]">
                <span>•</span>
                <time className="time">3시간</time>
              </div>
            )}
          </div>
          {true && <div className="mediaInfo">mediaInfo</div>}
        </div>
      </div>
      <button type="button" className="moreBtn p-[10px]">
        <Menu />
      </button>
    </section>
  );
}
