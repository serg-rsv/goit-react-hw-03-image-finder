import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';

import { ModalStyled, Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  static propTypes = {
    // children: PropTypes.node,
    onClose: PropTypes.func,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
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
    const { largeImageURL, tags } = this.props;
    return createPortal(
      <Overlay onClick={this.handleBackdrop}>
        <ModalStyled>
          <img src={largeImageURL} alt={tags} />;
        </ModalStyled>
      </Overlay>,
      modalRoot
    );
  }
}
