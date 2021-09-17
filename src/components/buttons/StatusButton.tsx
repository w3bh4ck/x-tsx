import React, { FC } from 'react';
import styled from 'styled-components';
import { LiveIcon } from '../../assets/icons/Icons';

interface Iprops {
  status: string;
}

const StatusButton: FC<Iprops> = ({ status }) => {
  return (
    <StatusWrapper>
      <StyledStatusButton className={`${status}`}>
        <span>
          <LiveIcon />
        </span>
        <span className="text">{status}</span>
      </StyledStatusButton>
    </StatusWrapper>
  );
};

export default StatusButton;

const StyledStatusButton = styled.div`
  height: 25px;
  padding: 0px 5px 2px 5px;
  display: flex;
  color: #ffffff;
  justify-content: center;
  border-radius: 5px;
  background-color: red;

  & .text {
    margin-left: 5px;
    text-transform: uppercase;
  }
`;

const StatusWrapper = styled.div`
  display: inline-block;
`;
