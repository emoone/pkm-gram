import React, { useEffect } from 'react';

import { BehaviorSubject } from 'rxjs';
import { CustomModal } from '.';
import _ from 'lodash';
import { useLocation } from 'react-router-dom';

/**
 * 기본 모달 아이템 정의
 */
export type ModalItem = {
  key: string;
  styles?: object;
  className?: string;
  shouldCloseOnOverlayClick?: boolean;
  shouldCloseOnOverlayCallback?: (e: any) => void;
  shouldCloseOnEsc?: boolean;
  originComponent?: JSX.Element;
  component: JSX.Element;
};

/**
 * 랜덤 키 생성
 * @return {string} random string
 */
export const randomString = (): string => {
  return Math.random().toString(36).substr(2, 11);
};

/**
 * 모달 컴포넌트 생성
 * @param param0 ModalItem
 * @returns
 */
const createComponent = ({
  key,
  shouldCloseOnEsc,
  shouldCloseOnOverlayClick,
  shouldCloseOnOverlayCallback,
  component,
}: ModalItem): React.ReactElement => {
  const onClose = (e: any) => {
    ModalInstance.getInstance().delete(key);
  };

  return (
    <CustomModal
      onClose={onClose}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      shouldCloseOnOverlayCallback={shouldCloseOnOverlayCallback}>
      {component}
    </CustomModal>
  );
};

const checkDuplicate = (items: Array<ModalItem>, compareKey: string) => {
  const result = _.filter(items, { key: compareKey });
  return result.length > 0;
};

/**
 * Modal 인스턴스
 */
export class ModalInstance {
  private static instance: ModalInstance;

  private modal: BehaviorSubject<Array<ModalItem>> | undefined;

  /**
   * Modal 인스턴스 가져오기
   * @returns ModalInstance
   */
  public static getInstance(): ModalInstance {
    // eslint-disable-next-line no-return-assign
    return this.instance || (this.instance = new this());
  }

  /**
   * Observer 생성
   * @returns Array<ModalItem>
   */
  public create(): BehaviorSubject<Array<ModalItem>> {
    this.modal = new BehaviorSubject<Array<ModalItem>>([]);
    return this.modal;
  }

  /**
   * show modal
   * @param key modal key
   * @param item child component for modal
   */
  public push(modal: ModalItem) {
    const { key } = modal;
    if (this.modal) {
      const current: Array<ModalItem> = this.modal.getValue();

      // 중복 제외 처리
      if (checkDuplicate(current, key)) {
        return;
      }

      this.modal.next(
        this.modal.value.concat({
          ...modal,
          originComponent: modal.component,
          component: createComponent(modal),
        }),
      );
      return this.modal;
    }
  }

  /**
   * close modal
   * @param key modal key
   */
  public delete(key: string) {
    if (this.modal) {
      const modals: Array<ModalItem> = this.modal.getValue();
      _.remove(modals, n => {
        return n.key === key;
      });
      this.modal.next([...modals]);
    }
  }

  /**
   * close all modal
   */
  public reset() {
    if (this.modal) {
      this.modal.next([]);
    }
  }
}

interface ModalContainerProps {
  onOverlayClick?: () => void | undefined;
  onLoad?: () => void | undefined;
}

/**
 * Modal container
 * @param props ParentCompProps
 * @constructor React
 */
const ModalContainer: React.FC<ModalContainerProps> = props => {
  const [modalList, setModalList] = React.useState<Array<ModalItem>>([]);
  const { onLoad } = props;

  const location = useLocation();

  React.useEffect(() => {
    return () => {
      ModalInstance.getInstance().reset();
    };
  }, [location]);

  React.useEffect(() => {
    const subscriber = ModalInstance.getInstance().create();
    subscriber.subscribe({
      next: (v: Array<ModalItem>) => {
        setModalList(v);
      },
    });

    if (onLoad) {
      onLoad();
    }

    return function cleanup() {
      subscriber.complete();
    };
  }, []);

  useEffect(() => {
    if (modalList.length === 0) {
      document.body.classList.remove('modal');
    }
    return () => {
      document.body.classList.add('modal');
    };
  }, [modalList]);

  return (
    <>
      {modalList.map((item, index) => {
        return (
          <span id={`modal_${item.key}`} key={`modal-${item.key}-${index}`}>
            {item.component}
          </span>
        );
      })}
    </>
  );
};

export default ModalContainer;
