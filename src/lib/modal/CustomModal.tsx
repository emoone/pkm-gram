import React from 'react';

interface CustomModalProps {
  shouldCloseOnEsc?: boolean;
  children: React.ReactNode;
  onClose?: (e: any) => void;
  shouldCloseOnOverlayClick?: boolean;
  shouldCloseOnOverlayCallback?: (e: any) => void;
}

const CustomModal = (props: CustomModalProps) => {
  const {
    children,
    onClose,
    shouldCloseOnEsc,
    shouldCloseOnOverlayClick,
    shouldCloseOnOverlayCallback,
  } = props;

  return (
    <div
      id="ModalContainer"
      className="z-[100] flex items-center justify-center w-full h-full fixed top-0 left-0 bg-opacity-50">
      <div
        id="overLay"
        className="modalOverLay absolute top-0 left-0 w-full h-full bg-[#0000007f]"
        onClick={
          shouldCloseOnOverlayClick ? onClose : shouldCloseOnOverlayCallback
        }
      />
      {children}
    </div>
  );
};

export default CustomModal;
