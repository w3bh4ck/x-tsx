import { FC } from 'react';
import styled from 'styled-components';
import { EmptyLiveLessonIcon } from '../../assets/icons/Icons';
import LessonCard from '../../components/cards/LessonCard';
import LessonsEmpty from '../../components/empty-states/LessonsEmpty';
import {
  allLessonsDataInterface,
  TypeSubject,
  TypeTutor,
} from '../../types/types';

const LessonGrid: FC<allLessonsDataInterface> = ({ allLessons }) => {
  return (
    <>
      {allLessons.length > 0 ? (
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
      ) : (
        <LessonsEmpty
          title="Oops! Try again later"
          description="There are no live lessons for this subject at the moment"
        >
          <EmptyLiveLessonIcon />
        </LessonsEmpty>
      )}
    </>
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
