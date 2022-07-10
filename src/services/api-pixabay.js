import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '27629620-bf8dbf1d2d77ad53435eb2e20';
const reqParams = {
  key: API_KEY,
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: 4,
  page: 1,
};
/**
 * Fetch images from Pixabay.
 * @returns array of objects of images.
 */
async function fetchImgs(query = '', page = 1) {
  reqParams.q = query;
  reqParams.page = page;

  return axios
    .get(BASE_URL, { params: reqParams })
    .then(({ data }) => {
      return data.hits;
    })
    .catch(error => console.log('error', error));
}

export { fetchImgs };
