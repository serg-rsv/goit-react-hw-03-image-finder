import { Component } from 'react';

import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './SearchBar/SearchBar';
import { Loader } from './Loader/Loader';

import { GlobalStyle } from 'styles/GlobalStyle';
import { Container } from './Container.styled';

import { fetchImgs, isLastPage } from 'services/api-pixabay';
import { Modal } from './Modal/Modal';

// const STATUS = {
//   IDLE: 'idle',
//   PENDING: 'pending',
//   RESOLVED: 'resolved',
//   REJECTED: 'rejected',
// };

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLastPage: false,
    error: '',
    isLoading: false,
    showModal: false,
    largeImageURL: '',
    tags: '',
    // status: STATUS.IDLE,
  };

  // async componentDidMount() {
  //   this.fetchNewImgs();
  // }

  componentDidUpdate(_, prevState) {
    const { page, query } = this.state;

    if (page !== prevState.page || query !== prevState.query) {
      this.fetchNewImgs(query, page);
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleQuery = query => {
    this.setState(prevState => {
      if (prevState.query !== query) {
        return {
          query,
          page: 1,
          images: [],
          error: '',
          showModal: false,
        };
      }
    });
  };

  fetchNewImgs = async (query = '', page = 1) => {
    try {
      this.setState({ isLoading: true });

      const respImgs = await fetchImgs(query, page);

      if (respImgs.length === 0) {
        throw new Error(`No results were found for ${query}...`);
      }

      const newImgs = respImgs.map(
        ({ id, webformatURL, largeImageURL, tags }) => ({
          id,
          webformatURL,
          largeImageURL,
          tags,
        })
      );

      this.setState(prevState => ({
        isLastPage: isLastPage(),
        images: [...prevState.images, ...newImgs],
      }));
    } catch (error) {
      this.setState({
        error: error.message,
      });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  openModal = (largeImageURL, tags) => {
    this.setState({ largeImageURL, tags, showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { isLastPage, isLoading, images, error, largeImageURL, tags } =
      this.state;

    return (
      <>
        <GlobalStyle />
        <Container>
          <Searchbar handleQuery={this.handleQuery} />
          {error !== '' && <p className="message">{error}</p>}
          {error === '' && (
            <ImageGallery images={images} openModal={this.openModal} />
          )}
          {isLoading && <Loader />}
          {!isLoading &&
            error === '' &&
            (isLastPage ? (
              <p className="noContent">No more content</p>
            ) : (
              images.length !== 0 && (
                <Button handleClick={this.handleLoadMore} />
              )
            ))}
          {this.state.showModal && (
            <Modal
              onClose={this.closeModal}
              largeImageURL={largeImageURL}
              tags={tags}
            />
          )}
        </Container>
      </>
    );
  }
}
