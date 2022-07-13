import PropTypes from 'prop-types';

import { ImageGalleryItemStyled, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  openModal,
}) => {
  return (
    <ImageGalleryItemStyled onClick={() => openModal(largeImageURL, tags)}>
      <Image src={webformatURL} alt={tags} />
    </ImageGalleryItemStyled>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string,
  openModal: PropTypes.func.isRequired,
};
