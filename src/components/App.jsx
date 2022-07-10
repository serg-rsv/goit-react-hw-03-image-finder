import { Component } from 'react';
import { GlobalStyle } from 'styles/GlobalStyle';
import { Button } from './Button/Button';
import { Container } from './Container.styled';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './SearchBar/SearchBar';

export class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Container>
          <Searchbar />
          <ImageGallery />
          <Button />
        </Container>
      </>
    );
  }
}
