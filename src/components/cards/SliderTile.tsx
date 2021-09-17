import React from 'react';
import styled from 'styled-components';

const SliderTile = () => {
  return <StyledTile></StyledTile>;
};

export default SliderTile;

const StyledTile = styled.div`
  min-width: 720px;
  height: 300px;
  border-radius: 15px;
  background-color: #7b7fda;
  background-image: url('/images/live-home.png');
  margin: 10px;
`;
