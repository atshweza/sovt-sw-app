import styled from "styled-components";
import { FOOTER_HEIGHT, HEADER_HEIGHT } from "../../../utils/constants";
import { calculateRem } from "../../../utils/helpers";

const StyledCharactorDetail = styled.div`
  height: calc(100vh - ${FOOTER_HEIGHT + HEADER_HEIGHT}px);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: ${calculateRem(10)};
`;
const StyledCharactorInfoHeader = styled.div`
  height: ${calculateRem(86)};
  padding: ${calculateRem(10)};
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.yellow};
  text-align: center;
`;
const StyledCharactorInfo = styled.div``;
const StyledHomeworldInfo = styled.div``;
const StyledCharactorInfoBlock = styled.div`
  display: grid;
  grid-template-row: auto;
  font-size: ${calculateRem(16)};
  span:first-child {
    font-weight: bold;
  }
  span {
    padding: ${calculateRem(5)};
    text-align: left;
  }
`;
const StyledHomeworldImage = styled.img`
  height: ${calculateRem(100)};
  width: ${calculateRem(100)};
`;

export {
  StyledCharactorDetail,
  StyledCharactorInfoHeader,
  StyledCharactorInfoBlock,
  StyledCharactorInfo,
  StyledHomeworldInfo,
  StyledHomeworldImage,
};
