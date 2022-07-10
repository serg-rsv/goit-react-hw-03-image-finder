import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryStyled>
      {images.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          // largeImageURL={largeImageURL}
          tags={tags}
        />
      ))}
    </ImageGalleryStyled>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      // largeImageURL: PropTypes.string,
      tags: PropTypes.string,
    })
  ),
};
