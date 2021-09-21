import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BackArrowIcon, DownArrowIcon } from '../../assets/icons/Icons';
import PageLoader from '../../components/loaders/PageLoader';
import { MyLessonLayout } from '../../containers/Layout';
import MyLessonsGrid from '../../containers/my-lessons-list/MyLessons';
import { getMyLessons } from '../../redux/action-creators/lessons.actions';
import { RootState } from '../../types/types';

const MyLessons = () => {
  const dispatch = useDispatch();
  const lessons = useSelector((state: RootState) => state.lessons);

  useEffect(() => {
    dispatch(getMyLessons());
  }, [dispatch]);

  return (
    <MyLessonLayout>
      <NavWrapper className="d-flex">
        <span className="back-arrow">
          <Link to="/">
            <BackArrowIcon />
          </Link>
        </span>
        <StyledPageTitle>My Lessons</StyledPageTitle>
      </NavWrapper>
      <LiveActionSection>
        <StyledSubjectButton>
          <span>All Subjects</span>
          <span>
            <DownArrowIcon />
          </span>
        </StyledSubjectButton>
        <StyledAddLessonButton>
          <span className="mx-2">Add live lessons</span>
        </StyledAddLessonButton>
      </LiveActionSection>
      {!lessons['loading'] ? (
        <div className="my-lessons">
          <MyLessonsGrid myLessons={lessons['myLessons']} />
        </div>
      ) : (
        <PageLoader />
      )}
    </MyLessonLayout>
  );
};

export default MyLessons;

const StyledPageTitle = styled.p`
  color: #313848;
  font-size: 24px;
  font-weight: 700;
  padding: 10px 10px 10px 10px;
`;

const NavWrapper = styled.div`
  margin-left: 30px;
  & .back-arrow {
    padding-top: 20px;
  }
`;

export const LiveActionSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  padding: 10px 50px 10px 50px;
  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.medium}) {
    padding: 10px 10px 10px 10px;
    flex-direction: column;
  }
`;

const StyledSubjectButton = styled.div`
  display: flex;
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;
  justify-content: space-between;
  padding: 10px 10px 10px 10px;
  height: 40px;
  min-width: 196px;
  border-radius: 8px;
  background-color: #313848;
  color: #ffffff;
  text-transform: uppercase;
`;

const StyledAddLessonButton = styled.div`
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
  cursor: pointer;
  padding: 10px 10px 10px 10px;
  height: 40px;
  min-width: 319px;
  border-radius: 8px;
  background-color: #7b7fda;
  background-image: url('/images/button-bg.png');
  color: #ffffff;
  text-transform: uppercase;
`;
