import styled from "styled-components";
import { calculateRem } from "../../../utils/helpers";

const StyledPaginationManager = styled.div`
  padding: ${calculateRem(10)};
  a {
    padding: ${calculateRem(10)};
    cursor: pointer;
    font-style: bold;
  }
`;

export { StyledPaginationManager };
