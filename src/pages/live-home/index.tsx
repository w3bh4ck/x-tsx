import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
// import LessonCard from '../../components/cards/LessonCard';
import Layout from '../../containers/Layout';
import LiveSlider from '../../containers/live-slider/LiveSlider';
import { getPromotedLiveLessons } from '../../redux/action-creators/lessons.actions';
import { RootState } from '../../types/types';

const LiveHome = () => {
  const dispatch = useDispatch();
  const promotedLessons = useSelector(
    (state: RootState) => state.liveLessons['promotedLiveLessons']
  );

  useEffect(() => {
    dispatch(getPromotedLiveLessons());
  }, [dispatch]);

  return (
    <Layout>
      <StyledPageTitle>Live Lessons</StyledPageTitle>
      <div>
        <LiveSlider promotedLessons={promotedLessons} />
      </div>
      <GridContainer>
        {/* <LessonCard />
        <LessonCard />
        <LessonCard />
        <LessonCard />
        <LessonCard />
        <LessonCard /> */}
      </GridContainer>
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

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px 50px 10px 50px;
`;
