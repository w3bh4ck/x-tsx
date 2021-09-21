import styled, { keyframes } from 'styled-components';

const PageLoader = () => {
  return (
    <Wrapper>
      <Spinner></Spinner>
    </Wrapper>
  );
};

export default PageLoader;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid #ffffff;
  border-right: 2px solid #ffffff;
  border-bottom: 2px solid #ffffff;
  border-left: 4px solid #7b7fda;
  background: transparent;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Wrapper = styled.div`
  padding-top: 10%;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
`;
