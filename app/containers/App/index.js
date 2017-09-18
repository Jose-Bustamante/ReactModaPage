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
import AppBar from 'material-ui/AppBar';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import MenuIconOwn from '../../components/MenuIconOwn';
import Drawer from 'material-ui/Drawer';
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
        primary2Color: '#A6A6A6',
        textColor: '#000',
      },
    });
    return {
      muiTheme,
    };
  }


  constructor(props) {
    super(props);
    this.state = { open: false, showMenuIcon: true };
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateMenuIcon);
  }
  updateMenuIcon = () => window.innerWidth > 1024 ? this.setState({ showMenuIcon: true }) : this.setState({ showMenuIcon: false });
  handleToggle = () => this.setState({ open: !this.state.open });
  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <AppBar // remove box-shadow
          title="B"
          showMenuIconButton={false}
          iconElementRight={this.state.showMenuIcon ? null : <MenuIconOwn onClick={this.handleToggle} />}
          style={{ background: 'transparent', color: '#000', position: 'absolute', boxShadow: 'none' }}
          titleStyle={{ color: 'black', maxWidth: '20px' }}
        >
          {this.state.showMenuIcon ?
            <div style={{ display: 'flex', alignSelf: 'center', color: 'white' }}>{'artist'} </div> :
            null
          }
        </AppBar>
        <Drawer
          width={200}
          openSecondary
          open={this.state.open}
          docked={false}
          onRequestChange={(open) => this.setState({ open })}
        >
          {'asdas'}
        </Drawer>
        {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}
