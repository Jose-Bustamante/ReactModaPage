/**
*
* MenuIconOwn
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import Wrapper from './Wrapper';
// import styled from 'styled-components';


function MenuIconOwn({ onClick }) {
  return (
    <Wrapper>
      <MenuIcon onClick={onClick} />
    </Wrapper>
  );
}

MenuIconOwn.propTypes = {
  onClick: PropTypes.func,
};

export default MenuIconOwn;
