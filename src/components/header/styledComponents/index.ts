import styled from 'styled-components';
import { calculateRem } from '../../../utils/helpers';

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: row;
`;

const StyledHeaderLogo =styled.img`
  width: ${calculateRem(86)};
  height: ${calculateRem(86)};
  padding: ${calculateRem(10)};
`;
const StyledHeaderTitile =styled.h2`
  padding: ${calculateRem(10)};
  color: ${({ theme }) => theme.colors.white};
`;

export { StyledHeader, StyledHeaderLogo,StyledHeaderTitile };