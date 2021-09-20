import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Layout from '../../containers/Layout';
import LessonGrid from '../../containers/lesson-grid/LessonGrid';
import LiveSlider from '../../containers/live-slider/LiveSlider';
import {
  getAllLessons,
  getPromotedLiveLessons,
} from '../../redux/action-creators/lessons.actions';
import { RootState } from '../../types/types';

const LiveHome = () => {
  const dispatch = useDispatch();
  const lessons = useSelector((state: RootState) => state.lessons);

  useEffect(() => {
    dispatch(getPromotedLiveLessons());
    dispatch(getAllLessons());
  }, [dispatch]);

  return (
    <Layout>
      <StyledPageTitle>Live Lessons</StyledPageTitle>
      <div>
        <LiveSlider promotedLessons={lessons['promotedLiveLessons']} />
      </div>
      <LessonGrid allLessons={lessons['allLessons']} />
    </Layout>
  );
};

export default LiveHome;

const StyledPageTitle = styled.p`
  color: #313848;
  font-size: 24px;
  font-weight: 700;
  padding: 10px 10px 10px 30px;
`;
