import { Link } from 'react-router-dom';

interface Props {
  isToday: boolean; // 오늘 여부.
  isDatePublish: boolean; // 날짜 노출 여부.
}

/**
 * 계정정보 영역 id, logo, menu
 * @returns
 */
export function FeedUserInfo({ isToday, isDatePublish }: Props) {
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
            <span>userId</span>
            {isDatePublish && isToday && (
              <div className="timeInfo inline-block text-[#a8a8a8]">
                <span>•</span>
                <time className="time">3시간</time>
              </div>
            )}
          </div>
          {isDatePublish && !isToday && (
            <div className="mediaInfo">mediaInfo</div>
          )}
        </div>
      </div>
    </section>
  );
}
