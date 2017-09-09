import styled from 'styled-components';
import { pxToRem } from '../../utils/styleUtils';

const Wrapper = styled.div`
  width: ${pxToRem(300)};
  height: ${pxToRem(250)};
  padding: ${pxToRem(5)};
  margin: ${pxToRem(5)};
  background: #fff;
`;

export default Wrapper;

