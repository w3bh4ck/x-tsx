import { FC } from 'react';
import styled from 'styled-components';
import LessonCard from '../../components/cards/LessonCard';
import {
  allLessonsDataInterface,
  TypeSubject,
  TypeTutor,
} from '../../types/types';

const LessonGrid: FC<allLessonsDataInterface> = ({ allLessons }) => {
  return (
    <GridContainer>
      {allLessons
        ? allLessons.map(lesson => {
            return (
              <LessonCard
                imageUrl={lesson?.image_url as string}
                topic={lesson?.topic as string}
                status={lesson?.status as string}
                tutor={lesson?.tutor as TypeTutor}
                subject={lesson?.subject as TypeSubject}
                startAt={lesson?.start_at as string}
              />
            );
          })
        : ''}
    </GridContainer>
  );
};

export default LessonGrid;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px 50px 10px 50px;
  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.medium}) {
    display: flex;
    flex-direction: column;
    padding: 10px 10px 10px 10px;
  }
`;
