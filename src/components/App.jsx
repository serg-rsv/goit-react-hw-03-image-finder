import { Component } from 'react';

import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './SearchBar/SearchBar';
import { Loader } from './Loader/Loader';

import { GlobalStyle } from 'styles/GlobalStyle';
import { Container } from './Container.styled';

import { fetchImgs } from 'services/api-pixabay';

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
    error: '',
    isLoading: false,
    // status: STATUS.IDLE,
  };

  async componentDidMount() {
    this.fetchNewImgs();
  }

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
        };
      }
    });
  };

  render() {
    const { isLoading, images, error } = this.state;

    return (
      <>
        <GlobalStyle />
        <Container>
          <Searchbar handleQuery={this.handleQuery} />
          {error !== '' && <p className="message">{error}</p>}
          {error === '' && <ImageGallery images={images} />}
          {isLoading && <Loader />}
          {!isLoading && error === '' && (
            <Button handleClick={this.handleLoadMore} />
          )}
        </Container>
      </>
    );
  }

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
        isLoading: false,
        images: [...prevState.images, ...newImgs],
      }));
    } catch (error) {
      this.setState({
        isLoading: false,
        error: error.message,
      });
    }
  };
}
