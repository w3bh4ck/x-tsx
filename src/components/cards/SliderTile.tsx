import React from 'react';
import styled from 'styled-components';
import StatusButton from '../buttons/StatusButton';

const SliderTile = () => {
  return (
    <StyledTile>
      <TileInfo>
        <StatusButton status={'live'} />
        <p className="title">Materials - metals and non metals</p>
      </TileInfo>
    </StyledTile>
  );
};

export default SliderTile;

const StyledTile = styled.div`
  min-width: 720px;
  height: 300px;
  border-radius: 15px;
  background-color: #7b7fda;
  background-image: url('/images/live-home.png');
  margin: 10px;
  & .title {
    color: #ffffff;
    text-transform: capitalize;
    font-weight: bold;
    font-size: 24px;
    margin-top: 10px;
  }
`;

const TileInfo = styled.div`
  margin-top: 150px;
  padding-left: 30px;
`;
