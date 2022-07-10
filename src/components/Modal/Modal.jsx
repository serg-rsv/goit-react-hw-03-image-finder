import PropTypes from 'prop-types';
import { ModalStyled } from './Modal.styled';
import { Overlay } from './Overlay.styled';

export const Modal = ({ src, alt }) => {
  return (
    <Overlay>
      <ModalStyled>
        <img src={src} alt={alt} />
      </ModalStyled>
    </Overlay>
  );
};

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
