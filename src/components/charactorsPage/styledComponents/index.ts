import styled from "styled-components";
import { FOOTER_HEIGHT, HEADER_HEIGHT } from "../../../utils/constants";
import { calculateRem } from "../../../utils/helpers";

const StyledCharactorsPage = styled.div`
  height: calc(100vh - ${FOOTER_HEIGHT + HEADER_HEIGHT}px);
  overflow-y: auto;
  text-align: center;
`;

export { StyledCharactorsPage };
