/*
 *
 * CharactorDetail
 *
 */

import React, { FC, ReactElement } from "react";
import {
  StyledCharactorDetail,
  StyledCharactorInfo,
  StyledCharactorInfoHeader,
  StyledHomeworldInfo,
  StyledCharactorInfoBlock,
  StyledHomeworldImage,
} from "./styledComponents";
import Planet from "../../assets/spin.gif";

const CharactorDetail: FC<{ charactor: any }> = ({
  charactor,
}): ReactElement => {
  return (
    <StyledCharactorDetail>
      {charactor && (
        <>
          <StyledCharactorInfo>
            <StyledCharactorInfoHeader>
              <h2>{charactor.name}</h2>
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
              <h2>{charactor.homeworld.name}</h2>
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
        </>
      )}
      {!charactor && <h2>Charactor not found</h2>}
    </StyledCharactorDetail>
  );
};

export default CharactorDetail;
