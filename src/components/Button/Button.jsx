import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styled';

export const Button = ({ handleClick }) => {
  return (
    <ButtonStyled type="button" onClick={handleClick}>
      Load more
    </ButtonStyled>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
