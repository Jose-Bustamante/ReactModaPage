/*
 *
 * Data reducer
 *
 */

import { fromJS, List } from 'immutable';

import {
  CHANGE_LOCALE,
  SUCCESS_LOAD_DATA,
} from './constants';


const initialState = fromJS({
  loading: false,
  mediaData: new List(),
});

function data(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOCALE:
      return state
        .set('locale', action.locale);
    case SUCCESS_LOAD_DATA:
      return state
          .set('mediaData', new List(action.data.socials));
    default:
      return state;
  }
}

export default data;
