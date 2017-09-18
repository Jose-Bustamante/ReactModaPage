import styled from 'styled-components';
import { pxToRem } from '../../utils/styleUtils';


const Image = styled.img`
  height: ${pxToRem(300)};
  width: ${pxToRem(250)};
  background: #fff;
`;

export default Image;
