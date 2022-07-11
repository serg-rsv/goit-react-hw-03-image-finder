import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';

import { ModalStyled } from './Modal.styled';
import { Overlay } from './Overlay.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  static propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onEscKey);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscKey);
  }

  onEscKey = e => {
    if (e.code === 'Escape') this.props.onClose();
  };

  handleBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.handleBackdrop}>
        <ModalStyled>{this.props.children}</ModalStyled>
      </Overlay>,
      modalRoot
    );
  }
}
