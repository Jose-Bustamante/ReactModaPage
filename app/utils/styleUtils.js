/* eslint-disable */
import { css } from 'styled-components';

const defaultPXSize = 16;

const sizes = {
  desktop: 1500,
  tablet: 1023,
  phone: 767,
};

export const pxToRem = (px) => `${(px / defaultPXSize)}rem`;

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
		@media (max-width: ${sizes[label] / 16}rem) {
			${css(...args)}
		}
	`;

  return acc
}, {});
