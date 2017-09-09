import 'jest-styled-components';
import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Wrapper from '../Wrapper';

describe('<Wrapper />', () => {
  it('renders Wrapper', () => {
    const renderedComponent = shallow(
      <Wrapper />
    );
    expect(shallowToJson(renderedComponent)).toMatchSnapshot();
  });
  it('should render content', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <Wrapper>{children}</Wrapper>
    );
    expect(renderedComponent.contains(children)).toBe(true);
    expect(shallowToJson(renderedComponent)).toMatchSnapshot();
  });
});
