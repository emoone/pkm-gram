import { AirPlane, BookMark, Heart, SpeechBubble } from '../../uis/icons';

import { CustomInput } from '../common/customInput';
import { Link } from 'react-router-dom';
import { useState } from 'react';

/**
 * description, like, comment, dm, bookmark 등 정보 모음
 * @returns
 */
export function FeedComment() {
  const [comment, setComment] = useState('');

  const DES1 =
    '팬들을 대상으로 488개의 캐릭터 순위를 선정하는 투표를 진행했습니다. 무려 460만명의 팬들이 투표에 참여했는데요. 1위 캐릭터는 나미카제 미나토가 선정됐으며, 2위에는 우치하 이타치, 3위 하루노 사쿠라, 4위 우치하 시스이, 하타케 카카시, 우즈마키 나루토가 뒤를 이었습니다. 사진: Jumpcomics';
  const DES2 =
    '팬들을 대상으로 488개의 캐릭터 순위를 선정하는 투표를 진행했습니다. \n무려 460만명의 팬들이 투표에 참여했는데요.\n 1위 캐릭터는 나미카제 미나토가 선정됐으며, 2위에는 우치하 이타치, 3위 하루노 사쿠라, 4위 우치하 시스이, 하타케 카카시, 우즈마키 나루토가 뒤를 이었습니다.사진: Jumpcomics';

  console.log(DES1, DES2);
  return (
    <section className="feedBottom pt-[20px] px-[16px] md:px-0">
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
        <button type="button" className="ml-auto ico bookmark">
          <BookMark />
        </button>
      </div>
      <div className="truncate whitespace-pre-wrap desCon line-clamp-3">
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
        선정됐으며, 2위에는 우치하 이타치, 3위 하루노 사쿠라, 4위 우치하 시스이,
        하타케 카카시, 우즈마키 나루토가 뒤를 이었습니다. 사진: Jumpcomics
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
