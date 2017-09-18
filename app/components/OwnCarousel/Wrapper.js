import styled from 'styled-components';
import { pxToRem, media } from '../../utils/styleUtils';


const Wrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-flow: column nowrap;
  margin-left: ${pxToRem(50)};
   ${media.phone`
    margin-left: ${pxToRem(20)};
  `}
`;

export default Wrapper;
