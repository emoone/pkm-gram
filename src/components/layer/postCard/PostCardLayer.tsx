import { FeedComment, FeedImg, FeedUserInfo } from '../../feedItems';

import CloseBtn from '../../../lib/modal/CloseBtn';
import { ModalInstance } from '../../../lib/modal';
import cn from 'clsx';

const POST_CARD_LAYER_KEY = 'postCardLayer';

interface PropsType {
  imgPath: string;
}

export function closePostCardLayer() {
  ModalInstance.getInstance().delete(POST_CARD_LAYER_KEY);
}

/**
 * 프로필 아이템용 레이어 component
 * TODO: 레이어 작업 수정 필요. 최상위 wrapper 실제 content 영역만큼 줄이고 싶은데 안됨.
 * @param props
 */
export function openPostCardLayer(props: PropsType) {
  const { imgPath } = props;
  ModalInstance.getInstance().push({
    key: POST_CARD_LAYER_KEY,
    shouldCloseOnOverlayClick: true,
    component: <PostCardLayerComponent imgPath={imgPath} />,
  });
}

export default function PostCardLayerComponent(props: PropsType) {
  const { imgPath } = props;
  return (
    <div className="inline-block z-[1] relative rounded-[5px] overflow-hidden bg-orange-400">
      <CloseBtn
        className="absolute top-0 right-0"
        onClick={closePostCardLayer}
      />
      <div
        className={cn(
          'flex bg-white flex-col items-stretch gap-x-[5px] contentCon max-w-[70%] mx-auto max-h-[90%]',
          'md:flex-row',
        )}>
        <div className="shrink-[1] grow-[1] overflow-hidden inline-flex items-center">
          <FeedImg />
        </div>
        <div className="md:min-w-[405px] md:max-w-[500px] grow-1 shrink-[2]">
          <FeedUserInfo />
          <FeedComment />
        </div>
      </div>
    </div>
  );
}