import styled from 'styled-components';
import { pxToRem } from '../../utils/styleUtils';

const SlideWrapper = styled.div`
  background: #fff;
  max-width: ${pxToRem(250)};
  transition:all 0.3s ease;
  overflow: hidden;
  border: 5px solid #fff;
  &:hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
    z-index: 999;
  }
`;

export default SlideWrapper;
