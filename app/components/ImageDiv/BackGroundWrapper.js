import styled from 'styled-components';
import { pxToRem, media } from '../../utils/styleUtils';
import header from '../../assets/img/header.png';

const BackGroundWrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
  height: ${pxToRem(482)};
  max-width: ${pxToRem(800)};
  flex-flow: column nowrap;
  justify-content: flex-start;
  margin-left: 0;
  margin-bottom: 0;
  background: url(${header}) no-repeat center;
  background-size: cover;
  line-height: ${pxToRem(482)};
  color: pink;
  text-align: center;
  ${media.phone`
    margin-left: ${pxToRem(60)};
  margin-bottom: ${pxToRem(20)};
  `}
`;

export default BackGroundWrapper;
