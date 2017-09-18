import styled from 'styled-components';
import { pxToRem, media } from '../../utils/styleUtils';

const Wrapper = styled.div`
  transition:all 0.3s ease;
  border-radius: 50%;
  background: #fff;
  padding: ${pxToRem(5)};
  display: none;
  &:hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
    z-index: 999;
    padding: ${pxToRem(8)};
  }
  ${media.tablet`
    margin-left: ${pxToRem(20)};
    display: block;
  `}
 
`;

export default Wrapper;
