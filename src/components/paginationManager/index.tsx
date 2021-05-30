/*
 *
 * PaginationManager
 *
 */

import React, { FC, ReactElement } from "react";
import { StyledPaginationManager } from "./styledComponents";
const PaginationManager: FC<{
  numberOfPages: number;
  currentPage: number;
  onSelectPage: Function;
}> = ({ numberOfPages, currentPage, onSelectPage }): ReactElement => {
  const getPageNumerContent = (pages: number) => {
    let content = [];
    for (let i = 1; i <= pages; i++) {
      content.push(
        <a key={i} onClick={() => onSelectPage(i)}>
          {i}
        </a>
      );
    }
    return content;
  };
  return (
    <StyledPaginationManager>
      {getPageNumerContent(numberOfPages)}
    </StyledPaginationManager>
  );
};

export default PaginationManager;
