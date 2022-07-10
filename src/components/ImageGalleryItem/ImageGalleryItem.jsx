import PropTypes from 'prop-types';

import { Image } from './Image.styled';
import { ImageGalleryItemStyled } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, tags }) => {
  return (
    <ImageGalleryItemStyled>
      <Image src={webformatURL} alt={tags} />
    </ImageGalleryItemStyled>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  // largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string,
};
