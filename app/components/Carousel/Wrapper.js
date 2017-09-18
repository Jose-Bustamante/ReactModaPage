import styled from 'styled-components';
import { pxToRem } from '../../utils/styleUtils';


const Wrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-flow: column nowrap;
  margin-left: ${pxToRem(20)};
  margin-bottom: ${pxToRem(10)};
  
`;

export default Wrapper;

// li {
//   width: ${pxToRem(250)} !important;
// }
// .test li{
//   width: ${pxToRem(250)} !important;
// }
