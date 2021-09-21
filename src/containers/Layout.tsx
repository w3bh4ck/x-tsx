import { ReactNode, FC } from 'react';
import styled from 'styled-components';

interface Iprops {
  children: ReactNode;
}

const Layout: FC<Iprops> = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;

export const MyLessonLayout: FC<Iprops> = ({ children }) => {
  return <StyledMyLessonLayout>{children}</StyledMyLessonLayout>;
};

const StyledLayout = styled.div`
  background-color: #e5e5e5;
  background-image: url('/images/live-home.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
`;

const StyledMyLessonLayout = styled.div`
  background-color: #e5e5e5;
  background-image: url('/images/my-lesson.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  & .my-lessons {
    display: flex;
    justify-content: center;
  }
`;
