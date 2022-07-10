import { Component } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './SearchBar/SearchBar';
import { GlobalStyle } from 'styles/GlobalStyle';
import { Container } from './Container.styled';
// import { Modal } from './Modal/Modal';

export class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Container>
          {/* <Modal /> */}
          <Searchbar />
          <ImageGallery />
          <Button />
        </Container>
      </>
    );
  }
}
