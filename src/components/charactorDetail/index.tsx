/*
 *
 * CharactorDetail
 *
 */

import React, { FC, ReactElement } from "react";
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

const CharactorDetail: FC<{ charactor: any; onGoHome: Function }> = ({
  charactor,
  onGoHome,
}): ReactElement => {
  return (
    <StyledCharactorDetail>
      {charactor && (
        <>
          <StyledCharactorInfo>
            <StyledCharactorInfoHeader>
              <h2>Charactor - {charactor.name}</h2>
            </StyledCharactorInfoHeader>
            <StyledCharactorInfoBlock>
              <span>Name</span>
              <span>{charactor.name}</span>
            </StyledCharactorInfoBlock>
            <StyledCharactorInfoBlock>
              <span>Gender</span>
              <span>{charactor.gender}</span>
            </StyledCharactorInfoBlock>
            <StyledCharactorInfoBlock>
              <span>Height</span>
              <span>{charactor.height}</span>
            </StyledCharactorInfoBlock>
            <StyledCharactorInfoBlock>
              <span>Mass</span>
              <span>{charactor.mass}</span>
            </StyledCharactorInfoBlock>
          </StyledCharactorInfo>
          <StyledHomeworldInfo>
            <StyledCharactorInfoHeader>
              <h2>Planet - {charactor.homeworld.name}</h2>
            </StyledCharactorInfoHeader>
            <StyledHomeworldImage src={Planet} alt="Home planet" />
            <div>
              <StyledCharactorInfoBlock>
                <span>Name</span>
                <span>{charactor.homeworld.name}</span>
              </StyledCharactorInfoBlock>
              <StyledCharactorInfoBlock>
                <span>RotationPeriod</span>
                <span>{charactor.homeworld.rotationPeriod}</span>
              </StyledCharactorInfoBlock>
              <StyledCharactorInfoBlock>
                <span>Terrain</span>
                <span>{charactor.homeworld.terrain}</span>
              </StyledCharactorInfoBlock>
              <StyledCharactorInfoBlock>
                <span>Climate</span>
                <span>{charactor.homeworld.climate}</span>
              </StyledCharactorInfoBlock>
              <StyledCharactorInfoBlock>
                <span>population</span>
                <span>{charactor.homeworld.population}</span>
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
      {!charactor && <h2>Charactor not found</h2>}
    </StyledCharactorDetail>
  );
};

export default CharactorDetail;
