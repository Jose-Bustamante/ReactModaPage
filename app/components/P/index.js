/**
 *
 * Paragraph
 *
 */
import styled from 'styled-components';
import { pxToRem, media } from '../../utils/styleUtils';

const P = styled.span`
  font-size: ${pxToRem(18)};
  font-family: Monaco;
  color: black;
  margin: 0;
  text-decoration: ${(props) => props.underline ? 'underline' : 'none'};
  margin-left: ${pxToRem(50)};
   ${media.phone`
    margin-left: ${pxToRem(20)};
  `}
`;

export default P;
