import { ModalInstance } from '../../../lib/modal';

const POST_CARD_LAYER_KEY = 'postCardLayer';

interface PropsType {
  imgPath: string;
}

export function closePostCardLayer() {
  ModalInstance.getInstance().delete(POST_CARD_LAYER_KEY);
}

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
  console.log(imgPath);
  return (
    <div>
      Modal
      <img src={imgPath} alt="" />
    </div>
  );
}
