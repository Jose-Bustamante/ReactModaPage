import styled from 'styled-components';
import { pxToRem } from '../../utils/styleUtils';

const Wrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-flow: column nowrap;
  justify-content: flex-start;
  margin-top: ${pxToRem(20)};
  background: #fff;
  padding: ${pxToRem(10)};
  width: 100%;
`;

export default Wrapper;
