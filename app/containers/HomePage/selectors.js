import { createSelector } from 'reselect';


/**
 * Direct selector to the languageToggle state domain
 */
const selectDataDomain = () => (state) => state.get('data');

/**
 * Select the language locale
 */

const makeSelectSocial = () => createSelector(
  selectDataDomain(),
  (data) => data.get('mediaData').toJS()
);

const makeSelectLoading = () => createSelector(
  selectDataDomain(),
  (data) => data.get('mediaData').size > 0
);

export {
  selectDataDomain,
  makeSelectSocial,
  makeSelectLoading,
};
