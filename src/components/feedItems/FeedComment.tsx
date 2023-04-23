import { Link } from 'react-router-dom';
import { AirPlane, BookMark, Heart, SpeechBubble } from '../../uis/icons';
import { CustomInput } from '../common/customInput';
import { useState } from 'react';

/**
 * description, like, comment, dm, bookmark 등 정보 모음
 * @returns
 */
export function FeedComment() {
  const [comment, setComment] = useState('');

  return (
    <section className="feedBottom pt-[20px]">
      <div className="statusCon flex gap-x-[5px]">
        <button type="button" className="ico heart">
          <Heart />
        </button>
        <button type="button" className="ico comment">
          <SpeechBubble />
        </button>
        <button type="button" className="ico dm">
          <AirPlane />
        </button>
        <button type="button" className="ico bookmark ml-auto">
          <BookMark />
        </button>
      </div>
      <div className="desCon line-clamp-3 truncate whitespace-pre-wrap">
        <button type="button" className="block text-[.7rem] font-semibold">
          <span>좋아요</span>
          <span>17,777개</span>
        </button>
        <Link
          to={'/account/hypebeastkr'}
          className="id inline-block font-semibold mr-[5px]">
          hypebeastkr
        </Link>
        팬들을 대상으로 488개의 캐릭터 순위를 선정하는 투표를 진행했습니다. 무려
        460만명의 팬들이 투표에 참여했는데요. 1위 캐릭터는 나미카제 미나토가
        선정됐으며, 2위에는 우치하
        <button className="more block text-[#ccc]">
          <span>더보기</span>
        </button>
      </div>
      <button type="button" className="showCommentList">
        댓글 모두 보기
      </button>
      <form className="commentForm flex items-center px-[.5rem]">
        <CustomInput
          className="p-0"
          placeHolder="add Comment..."
          value={comment}
          onChange={e => {
            setComment(e.target.value);
          }}
        />
        {comment.length > 0 && (
          <button
            type="button"
            className="text-[#0095f6] text-[.7rem] font-semibold hover:text-black">
            Submit
          </button>
        )}
      </form>
    </section>
  );
}
