/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import renderNothing from 'recompose/renderNothing';
import compose from 'recompose/compose';
import branch from 'recompose/branch';
import lifecycle from 'recompose/lifecycle';
import { createStructuredSelector } from 'reselect';
import Carousel from '../../components/Carousel';
import Wrapper from './Wrapper';
import { makeSelectSocial, makeSelectLoading } from './selectors';
import { loadData } from './actions';
import ImageDiv from '../../components/ImageDiv';
import P from '../../components/P';
import Header from '../../components/Header';
import OwnCarousel from '../../components/OwnCarousel';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { number: 0 };
    this.test = this.test.bind(this);
  }
  componentDidMount() {
    window.addEventListener('resize', this.test);
    this.test();
  }
  test() {
    this.setState({ number: Math.floor(window.innerWidth / 260) });
  }
  render() {
    return (
      <Wrapper>
        <ImageDiv />
        <P>
          {'The xx is een driekoppige Engelse indieband, gevormd in Wandsworth, Londen in 2005. De drie brachten hun debuutalbum, xx, uit in augustus 2009. Het kwam op de eerste plaats van de "best of 2009"-lijst van The Guardian en op de tweede op die van NME.'}
        </P>
        <Header>
          {'Upcoming Artists'}
        </Header>
        <OwnCarousel />
      </Wrapper>
    );
  }
}

HomePage.propTypes = {
  socials: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  socials: makeSelectSocial(),
  loading: makeSelectLoading(),
});

export function mapDispatchToProps(dispatch) {
  return {
    loadData: () => dispatch(loadData()),
  };
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.loadData();
    },
  }),
  branch(
    ({ loading }) => !loading,
    renderNothing,
  )
)(HomePage);
