import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CalendarIcon, DownArrowIcon } from '../../assets/icons/Icons';
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
      <LiveActionSection>
        <StyledSubjectButton>
          <span>All Subjects</span>
          <span>
            <DownArrowIcon />
          </span>
        </StyledSubjectButton>
        <StyledCalendarButton to="/my-lessons">
          <span>
            <CalendarIcon />
          </span>
          <span className="mx-2">View my lessons</span>
        </StyledCalendarButton>
      </LiveActionSection>
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

export const LiveActionSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  padding: 10px 50px 10px 50px;
  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.medium}) {
    padding: 10px 10px 10px 10px;
  }
`;

const StyledSubjectButton = styled.div`
  display: flex;
  font-size: 14px;
  cursor: pointer;
  justify-content: space-between;
  padding: 10px 10px 10px 10px;
  height: 40px;
  min-width: 196px;
  border-radius: 8px;
  background-color: #313848;
  color: #ffffff;
  text-transform: uppercase;
`;

const StyledCalendarButton = styled(Link)`
  display: flex;
  font-size: 14px;
  cursor: pointer;
  padding: 10px 10px 10px 10px;
  height: 40px;
  min-width: 196px;
  border-radius: 8px;
  background-color: #7b7fda;
  color: #ffffff;
  text-transform: uppercase;
`;
