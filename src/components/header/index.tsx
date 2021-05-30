/*
 *
 * Header
 *
 */

import React, { FC, ReactElement } from "react";
import {
  StyledHeader,
  StyledHeaderLogo,
  StyledHeaderTitile,
} from "./styledComponents";
import AppIcon from "../../assets/logo.svg";

const Header: FC<{
  title: string;
  onGoHome: Function;
}> = ({ title, onGoHome }): ReactElement => {
  return (
    <StyledHeader>
      <div onClick={() => onGoHome()}>
        <StyledHeaderLogo src={AppIcon} alt="Star wars logo" />
      </div>
      <StyledHeaderTitile>{title}</StyledHeaderTitile>
    </StyledHeader>
  );
};

export default Header;
