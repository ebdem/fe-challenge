import * as React from "react";
import styled from "styled-components";
import { opacify } from "polished";
import { CSSTransition } from "react-transition-group";
import { FaWindowClose } from "react-icons/fa";


interface ModalProps {
  visible: boolean;
  onClose: () => void;
}

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${opacify(0.1, "#202020")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalView = styled.div`
  background-color: #FFFFFF;
  min-width: 400px;
  padding: 2rem;
  box-shadow: 10px 10px 10px #333333;
  transition: all 300ms ease-out;
  border-radius: 4px;
  display: flex;
  flex-direction: flex-end;
  flex-direction: column;
`;

const ModalCloseButton = styled.button`
 
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  color: #333333;
  font-size: 1.5rem;
  transition: all 300ms ease-out;
  display: flex;
  justify-self: flex-end;
  align-self: flex-end;
  margin-top: -1rem;
  margin-left: -1rem;
  `


const TransitionContainer = styled.div`
  .modal-enter {
    opacity: 0.01;

    .modal-view {
      transform: scale(0.9) translateY(20%);
    }
  }
  .modal-enter-active {
    opacity: 1;
    transition: all 300ms ease-out;

    .modal-view {
      transform: scale(1) translateY(0%);
    }
  }
  .modal-exit {
    opacity: 1;

    .modal-view {
      transform: scale(1) translateY(0%);
    }
  }
  .modal-exit-active {
    opacity: 0.01;
    transition: all 300ms ease-out;

    .modal-view {
      transform: scale(0.9) translateY(20%);
    }
  }
`;

const Modal: React.FC<ModalProps> = ({ visible, children, onClose }) => {
  return (
    <TransitionContainer>
      <CSSTransition
        in={visible}
        timeout={400}
        unmountOnExit
        classNames="modal"
      >
        {state => (
          <ModalContainer>

            <ModalView className="modal-view">
              <ModalCloseButton onClick={onClose}>
                <FaWindowClose />
              </ModalCloseButton>
              {children}
            </ModalView>
          </ModalContainer>
        )}
      </CSSTransition>
    </TransitionContainer>
  );
};

export default Modal;
