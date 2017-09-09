/**
*
* TweetBlock
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Wrapper from './Wrapper';

function TweetBlock({ post, date, profile: { src, name, username } }) {
  return (
    <Wrapper>
      <Card style={{ height: '100%' }}>
        <CardHeader
          title={name}
          subtitle={username}
          avatar={src}
        />
        <CardText>
          {post}
        </CardText>
        <CardText style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '40px' }}>{date}</CardText>
      </Card>
    </Wrapper>
  );
}

TweetBlock.propTypes = {
  profile: PropTypes.object.isRequired,
  post: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default TweetBlock;
