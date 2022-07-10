import PropTypes from 'prop-types';
import { SearchBarStyled } from './SearchBar.styled';
import { SearchForm } from './SearchForm.styled';
import { SearchButton } from './SearchButton.styled';
import { ButtonLabel } from './ButtonLabel.styled';
import { SearchInput } from './SearchInput.styled';

export const Searchbar = ({ handleQuery }) => {
  const handleSubmit = e => {
    e.preventDefault();

    handleQuery(e.currentTarget.elements.query.value);
    // e.target.reset();
  };

  return (
    <SearchBarStyled>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <ButtonLabel />
        </SearchButton>

        <SearchInput
          name="query"
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchBarStyled>
  );
};

Searchbar.propTypes = {
  handleQuery: PropTypes.func.isRequired,
};
