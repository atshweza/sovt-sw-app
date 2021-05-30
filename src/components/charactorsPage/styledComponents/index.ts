import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import { FOOTER_HEIGHT, HEADER_HEIGHT } from "../../../utils/constants";
import { calculateRem } from "../../../utils/helpers";

const StyledCharactorsPage = styled.div`
  height: calc(100vh - ${FOOTER_HEIGHT + HEADER_HEIGHT}px);
  overflow-y: auto;
  text-align: center;
`;
const StyledCharactoBanner = styled.img`
  height: 35%;
  width: 90%;
  padding-top: ${calculateRem(10)};
  padding-botton: ${calculateRem(10)};
`;

export { StyledCharactorsPage, StyledCharactoBanner };
