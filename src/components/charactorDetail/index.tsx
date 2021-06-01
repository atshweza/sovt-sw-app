/*
 *
 * CharactorDetail
 *
 */

import React, { FC, ReactElement } from "react";
import { useQuery } from "@apollo/react-hooks";
import Button from "@material-ui/core/Button";
import {
  StyledCharactorDetail,
  StyledCharactorInfo,
  StyledCharactorInfoHeader,
  StyledHomeworldInfo,
  StyledCharactorInfoBlock,
  StyledHomeworldImage,
  StyledActions,
} from "./styledComponents";
import Planet from "../../assets/spin.gif";
import { FIND_PERSON_QUERY } from "../../graphQL/queries";
import LoadingIndicator from "../../components/loadingIndicator";

const CharactorDetail: FC<{ selectedCharactor: string; onGoHome: Function }> =
  ({ selectedCharactor, onGoHome }): ReactElement => {
    const { loading, data, error } = useQuery(FIND_PERSON_QUERY, {
      variables: { name: selectedCharactor },
    });
    return (
      <StyledCharactorDetail>
        {data && data.personByName && (
          <>
            <StyledCharactorInfo>
              <StyledCharactorInfoHeader>
                <h2>Charactor - {data.personByName.name}</h2>
              </StyledCharactorInfoHeader>
              <StyledCharactorInfoBlock>
                <span>Name</span>
                <span>{data.personByName.name}</span>
              </StyledCharactorInfoBlock>
              <StyledCharactorInfoBlock>
                <span>Gender</span>
                <span>{data.personByName.gender}</span>
              </StyledCharactorInfoBlock>
              <StyledCharactorInfoBlock>
                <span>Height</span>
                <span>{data.personByName.height}</span>
              </StyledCharactorInfoBlock>
              <StyledCharactorInfoBlock>
                <span>Mass</span>
                <span>{data.personByName.mass}</span>
              </StyledCharactorInfoBlock>
            </StyledCharactorInfo>
            <StyledHomeworldInfo>
              <StyledCharactorInfoHeader>
                <h2>Home Planet - {data.personByName.homeworld.name}</h2>
              </StyledCharactorInfoHeader>
              <StyledHomeworldImage src={Planet} alt="Home planet" />
              <div>
                <StyledCharactorInfoBlock>
                  <span>Name</span>
                  <span>{data.personByName.homeworld.name}</span>
                </StyledCharactorInfoBlock>
                <StyledCharactorInfoBlock>
                  <span>RotationPeriod</span>
                  <span>{data.personByName.homeworld.rotationPeriod}</span>
                </StyledCharactorInfoBlock>
                <StyledCharactorInfoBlock>
                  <span>Terrain</span>
                  <span>{data.personByName.homeworld.terrain}</span>
                </StyledCharactorInfoBlock>
                <StyledCharactorInfoBlock>
                  <span>Climate</span>
                  <span>{data.personByName.homeworld.climate}</span>
                </StyledCharactorInfoBlock>
                <StyledCharactorInfoBlock>
                  <span>population</span>
                  <span>{data.personByName.homeworld.population}</span>
                </StyledCharactorInfoBlock>
              </div>
            </StyledHomeworldInfo>
            <StyledActions>
              <Button size="small" onClick={() => onGoHome()}>
                Back
              </Button>
            </StyledActions>
          </>
        )}
        {error && <h2> Error retrieving Charactor Details</h2>}
        {data && !data.personByName && <h2>Charactor not found</h2>}
        {loading && <LoadingIndicator />}
      </StyledCharactorDetail>
    );
  };

export default CharactorDetail;
