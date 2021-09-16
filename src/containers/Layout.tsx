import { ReactNode, FC } from 'react';
import styled from 'styled-components';

interface Iprops {
  children: ReactNode;
}

const Layout: FC<Iprops> = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;

const StyledLayout = styled.div`
  background-color: #e5e5e5;
  background-image: url('/images/live-home.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
`;
