import axios from 'axios';

export const fetchBeers = (page, perPage) => {
  const url = `https://api.punkapi.com/v2/beers`;

  const params = {
    page,
    per_page: perPage,

  };

  return async (dispatch) => {
    try {
      const response = await axios.get(url, { params });
      dispatch({
        type: 'FETCH_BEERS',
        payload: response.data,
      });
      return response.data; // You can return data if needed
    } catch (error) {
      console.error('Error fetching beers:', error);
    }
  };
};
