import { FeedComment, FeedImg, FeedUserInfo } from '../../feedItems';

import CloseBtn from '../../../libs/modal/CloseBtn';
import { ModalInstance } from '../../../libs/modal';
import cn from 'clsx';

const POST_CARD_LAYER_KEY = 'postCardLayer';

interface PropsType {
  imgPath: string;
}

export function closePostCardModal() {
  ModalInstance.getInstance().delete(POST_CARD_LAYER_KEY);
}

/**
 * 프로필 아이템용 레이어 component
 * TODO: 레이어 작업 수정 필요. 최상위 wrapper 실제 content 영역만큼 줄이고 싶은데 안됨.
 * @param props
 */
export function openPostCardModal(props: PropsType) {
  const { imgPath } = props;
  ModalInstance.getInstance().push({
    key: POST_CARD_LAYER_KEY,
    shouldCloseOnOverlayClick: true,
    component: <PostCardModalComponent imgPath={imgPath} />,
  });
}

export default function PostCardModalComponent(props: PropsType) {
  const { imgPath } = props;

  return (
    <div className=" z-[1] relative rounded-[5px] w-full h-full max-w-[90vw] max-h-[90vh] bg-orange-400 overflow-hidden">
      <CloseBtn
        className="absolute top-0 right-0 z-[2]"
        onClick={closePostCardModal}
      />
      <div
        className={cn(
          'flex bg-white flex-col items-stretch gap-x-[5px] contentCon h-[inherit]',
          'md:flex-row',
        )}>
        <div className="shrink-[1] grow-[1] overflow-hidden inline-flex items-center md:w-[450px] aspect-[1/1]">
          <FeedImg />
        </div>
        <div className="md:min-w-[405px] md:max-w-[500px] grow-1 shrink-[2] pr-[5px]">
          <FeedUserInfo />
          <FeedComment />
        </div>
      </div>
    </div>
  );
}
