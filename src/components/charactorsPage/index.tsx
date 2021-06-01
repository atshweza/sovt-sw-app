/*
 *
 * CharactorsPage
 *
 */

import React, { FC, ReactElement } from "react";
import { useQuery } from "@apollo/react-hooks";
import Person from "../../models/person.model";
import OverviewCard from "../overviewCard";
import PaginationManager from "../paginationManager";
import { StyledCharactorsPage, StyledCharactoBanner } from "./styledComponents";
import CharactorBanner from "../../assets/charactors.jpeg";
import LoadingIndicator from "../../components/loadingIndicator";
import { PEOPLE_QUERY } from "../../graphQL/queries";

const CharactorsPage: FC<{
  currentPage: number;
  onLearnMore: Function;
  onSelectPage: Function;
}> = ({ currentPage, onLearnMore, onSelectPage }): ReactElement => {
  const { loading, data, error } = useQuery(PEOPLE_QUERY, {
    variables: { page: currentPage },
  });
  return (
    <StyledCharactorsPage>
      <StyledCharactoBanner src={CharactorBanner} alt="Star wars banner" />
      {data && (
        <>
          {data.people.people.map((person: Person) => (
            <OverviewCard
              key={person.name}
              name={person.name}
              onLeanMore={onLearnMore}
            />
          ))}
          <PaginationManager
            numberOfPages={data.people.numberOfPages}
            currentPage={currentPage}
            onSelectPage={onSelectPage}
          />
        </>
      )}
      {error && <h2> Error retrieving Charactor/s</h2>}
      {loading && <LoadingIndicator />}
    </StyledCharactorsPage>
  );
};

export default CharactorsPage;
