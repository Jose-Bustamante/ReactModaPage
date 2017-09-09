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
import AppBar from 'material-ui/AppBar';
import Wrapper from './Wrapper';
import { makeSelectSocial, makeSelectLoading } from './selectors';
import { loadData } from './actions';
import VideoBlock from '../../components/VideoBlock';
import ImageBlock from '../../components/ImageBlock';
import TweetBlock from '../../components/TweetBlock';


class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  renderBlocks = (data, key) => {
    if (data.type === 'image') {
      return <ImageBlock source={data.src} key={key} />;
    }
    if (data.type === 'video') {
      return <VideoBlock source={data.src} key={key} />;
    }
    if (data.type === 'tweet') {
      return <TweetBlock post={data.post} profile={data.profile} date={data.date} key={key} />;
    }
    return null;
  };
  render() {
    const { socials } = this.props;
    const blocks = socials.map(this.renderBlocks);
    return (
      <Wrapper>
        <AppBar
          title="Social"
          showMenuIconButton={false}
        />
        {blocks}
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
