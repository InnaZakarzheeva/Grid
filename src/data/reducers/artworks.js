import {
  FETCH_ARTWORKS,
  FETCH_ARTWORKS_SUCCESS,
  FETCH_ARTWORKS_ERROR,
} from '../actions/actionTypes';

const initialState = {
  items: [],
  loading: false,
  isFailed: false,
};

export const artworks = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTWORKS:
      return {
        ...state,
        loading: true,
        isFailed: false,
      };

    case FETCH_ARTWORKS_SUCCESS:
      return {
        ...state,
        items: [...action.payload],
        loading: false,
        isFailed: false,
      };

    case FETCH_ARTWORKS_ERROR:
      return {
        ...state,
        loading: false,
        isFailed: true,
      };

    default:
      return state;
  }
};
