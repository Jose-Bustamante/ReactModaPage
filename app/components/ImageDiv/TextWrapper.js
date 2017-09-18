import styled from 'styled-components';
import { pxToRem, media } from '../../utils/styleUtils';

const TextWrapper = styled.div`
  width: 100%;
  color: pink;
  text-align: right;
  position: absolute;
  padding-left: ${pxToRem(20)};
  font-size: ${pxToRem(258)};
  overflow: hidden;
  line-height: ${pxToRem(482)};
  ${media.phone`
    text-align: left;
    font-size: ${pxToRem(108)};
  `}
`;

export default TextWrapper;
