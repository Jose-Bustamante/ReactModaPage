import styled from 'styled-components';
import { pxToRem } from '../../utils/styleUtils';

const Wrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-flow: wrap;
  justify-content: center;
  max-width: ${pxToRem(950)};
  margin: 0 auto;
  background: #b3d4fc;
`;

export default Wrapper;
