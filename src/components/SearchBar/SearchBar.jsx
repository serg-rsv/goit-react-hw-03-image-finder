import { Component } from 'react';
import { SearchBarStyled } from './SearchBar.styled';
import { SearchForm } from './SearchForm.styled';
import { SearchButton } from './SearchButton.styled';
import { ButtonLabel } from './ButtonLabel.styled';
import { SearchInput } from './SearchInput.styled';

export class Searchbar extends Component {
  render() {
    return (
      <SearchBarStyled>
        <SearchForm>
          <SearchButton type="submit">
            <ButtonLabel>Search</ButtonLabel>
          </SearchButton>

          <SearchInput
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchBarStyled>
    );
  }
}
