import React from 'react';
import styled from 'styled-components';
import Layout from '../../containers/Layout';
import LiveSlider from '../../containers/live-slider/LiveSlider';

const LiveHome = () => {
  return (
    <Layout>
      <StyledPageTitle>Live Lessons</StyledPageTitle>
      <div>
        <LiveSlider />
      </div>
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
