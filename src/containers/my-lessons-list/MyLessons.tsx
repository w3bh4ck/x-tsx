import React from 'react';
import styled from 'styled-components';
import MyLessonItem from '../../components/cards/list-tems/MyLessonsItem';

const MyLessonsGrid = () => {
  return (
    <StyledGrid>
      <MyLessonItem />
      <MyLessonItem />
      <MyLessonItem />
      <MyLessonItem />
      <MyLessonItem />
      <MyLessonItem />
    </StyledGrid>
  );
};

export default MyLessonsGrid;

const StyledGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: auto auto;
  padding: 10px 50px 10px 50px;
  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.medium}) {
    display: flex;
    flex-direction: column;
    padding: 10px 10px 10px 10px;
  }
`;
