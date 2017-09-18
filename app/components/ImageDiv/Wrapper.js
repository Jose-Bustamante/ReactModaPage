import styled from 'styled-components';
import { pxToRem } from '../../utils/styleUtils';

const Wrapper = styled.div`
  display: flex;
  flex: 0 0 auto;
  height: ${pxToRem(482)};
  flex-flow: column;
  justify-content: flex-start;
  background-size: cover;
  margin-bottom: ${pxToRem(10)};
  color: pink;
  text-align: center;
  margin-bottom: ${pxToRem(40)};
`;

export default Wrapper;
