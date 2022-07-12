import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import { Component } from 'react';

import { ImageGalleryItemStyled, Image } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  static propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
  };

  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props;

    return (
      <>
        <ImageGalleryItemStyled onClick={this.toggleModal}>
          <Image src={webformatURL} alt={tags} />
        </ImageGalleryItemStyled>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags} />;
          </Modal>
        )}
      </>
    );
  }
}
