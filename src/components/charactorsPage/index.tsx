/*
 *
 * CharactorsPage
 *
 */

import React, { FC, ReactElement } from "react";
import PageData from "../../models/pageData.model";
import Person from "../../models/person.model";
import OverviewCard from "../overviewCard";
import PaginationManager from "../paginationManager";
import { StyledCharactorsPage, StyledCharactoBanner } from "./styledComponents";
import CharactorBanner from "../../assets/charactors.jpeg";

const CharactorsPage: FC<{
  pageData: PageData;
  currentPage: number;
  onLearnMore: Function;
  onSelectPage: Function;
}> = ({ pageData, currentPage, onLearnMore, onSelectPage }): ReactElement => {
  return (
    <StyledCharactorsPage>
      <StyledCharactoBanner src={CharactorBanner} alt="Star wars banner" />
      {pageData.people.map((person: Person) => (
        <OverviewCard
          key={person.name}
          name={person.name}
          onLeanMore={onLearnMore}
        />
      ))}
      <PaginationManager
        numberOfPages={pageData.numberOfPages}
        currentPage={currentPage}
        onSelectPage={onSelectPage}
      />
    </StyledCharactorsPage>
  );
};

export default CharactorsPage;
