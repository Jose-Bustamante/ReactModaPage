/*
 *
 * LanguageProvider actions
 *
 */

import {
  CHANGE_LOCALE,
  REQUEST_LOAD_DATA,
} from './constants';

export function changeLocale(languageLocale) {
  return {
    type: CHANGE_LOCALE,
    locale: languageLocale,
  };
}

export function loadData() {
  return {
    type: REQUEST_LOAD_DATA,
  };
}
