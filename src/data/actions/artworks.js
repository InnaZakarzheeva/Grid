import {
  FETCH_ARTWORKS,
  FETCH_ARTWORKS_SUCCESS,
  FETCH_ARTWORKS_ERROR,
} from './actionTypes';
import server from '../../services/fakeApiService';

function fetchArtworks() {
  return {
    type: FETCH_ARTWORKS,
  };
}

function fetchArtworksSuccess(response) {
  return {
    type: FETCH_ARTWORKS_SUCCESS,
    payload: response.artworks,
  };
}

function fetchArtworksFailed(error) {
  return {
    type: FETCH_ARTWORKS_ERROR,
    error,
  };
}

export function loadArtworks() {
  return (dispatch) => {
    server();
    dispatch(fetchArtworks());
    return fetch('api/artworks')
      .then((res) => JSON.parse(res._bodyInit))
      .then((json) => dispatch(fetchArtworksSuccess(json)))
      .catch((err) => dispatch(fetchArtworksFailed(err)));
  };
}
