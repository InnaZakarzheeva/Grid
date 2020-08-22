import {combineReducers} from 'redux';
import {artworks} from './artworks';

export const appReducer = combineReducers({
  artworks,
});