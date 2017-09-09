/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { darken } from 'material-ui//utils/colorManipulator';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  static childContextTypes = {
    muiTheme: PropTypes.object,
  };

  getChildContext() {
    // TODO replace BaseTheme for an empty object
    const muiTheme = getMuiTheme({
      palette: {
        primary1Color: '#A6A6A6',
        primary2Color: darken('#A6A6A6', 0.3),
        textColor: '#CCCCCC',
      },
    });
    return {
      muiTheme,
    };
  }

  render() {
    return (
      <div>
        {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}
