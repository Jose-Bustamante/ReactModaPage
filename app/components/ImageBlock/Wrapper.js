import styled from 'styled-components';
import { pxToRem } from '../../utils/styleUtils';


const Wrapper = styled.div`
  height: ${pxToRem(250)};
  width: ${pxToRem(300)};
  padding: ${pxToRem(5)};
  margin: ${pxToRem(5)};
  background: #fff;
`;

export default Wrapper;
