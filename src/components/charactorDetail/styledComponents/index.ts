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
const StyledActions = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  .MuiButtonBase-root {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.yellow};
  }
`;
const StyledCharactorInfoBlock = styled.div`
  display: flex;
  font-size: ${calculateRem(16)};
  span:first-child {
    font-weight: bold;
  }
  span {
    padding: ${calculateRem(5)};
    text-align: left;
    flex: 1;
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
  StyledActions,
};
