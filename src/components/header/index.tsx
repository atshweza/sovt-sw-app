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
}> = ({ title }): ReactElement => {
  return (
    <StyledHeader>
      <StyledHeaderLogo src={AppIcon} alt="Star wars logo" />
      <StyledHeaderTitile>{title}</StyledHeaderTitile>
    </StyledHeader>
  );
};

export default Header;
