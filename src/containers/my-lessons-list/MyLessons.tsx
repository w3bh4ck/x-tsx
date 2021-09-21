import { FC } from 'react';
import styled from 'styled-components';
import { EmptyMyLessonIcon } from '../../assets/icons/Icons';
import MyLessonItem from '../../components/cards/list-tems/MyLessonsItem';
import MyLessonEmptyState from '../../components/empty-states/MyLessonEmptyState';
import {
  MyLessonsDataInterface,
  TypeSubject,
  TypeTutor,
} from '../../types/types';

const MyLessonsGrid: FC<MyLessonsDataInterface> = ({ myLessons }) => {
  return (
    <div style={{ width: '100%' }}>
      <StyledGrid>
        {myLessons.length > 0
          ? myLessons.map((lesson, i: number) => {
              return (
                <MyLessonItem
                  startAt={lesson?.start_at as string}
                  subject={lesson?.subject as TypeSubject}
                  imageUrl={lesson?.image_url as string}
                  topic={lesson?.topic as string}
                  status={lesson?.status as string}
                  tutor={lesson?.tutor as TypeTutor}
                  key={i}
                />
              );
            })
          : ''}
      </StyledGrid>
      {myLessons.length < 1 && (
        <MyLessonEmptyState
          title="Oops! Nothing here"
          description={
            'Looks like you have not added a lesson for this subject'
          }
        >
          <EmptyMyLessonIcon />
        </MyLessonEmptyState>
      )}
    </div>
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
