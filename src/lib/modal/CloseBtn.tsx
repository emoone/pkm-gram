import { Close } from '../../uis/icons';
import { ModalInstance } from '.';
import cn from 'clsx';
/**
 * 모든 영역 닫기 버튼 재사용
 * height // 이미지 높이값 동적 적용
 * onClose 함수 적용 필요
 */

interface CloseBtnProps {
  className?: string;
  onClick?: (e: any) => void;
  color?: string;
}
const CloseBtn: React.FC<CloseBtnProps> = (props: CloseBtnProps) => {
  const { className = '', color = '#000', onClick } = props;

  return (
    <button
      className={cn('closeBtn', className)}
      onClick={e => {
        if (onClick) onClick(e);
        else ModalInstance.getInstance().reset();
      }}>
      <Close color={color} />
    </button>
  );
};
export default CloseBtn;
