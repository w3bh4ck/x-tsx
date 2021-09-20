import React, { FC } from 'react';
import styled from 'styled-components';
import { LiveIcon, PlayIcon, UpcomingIcon } from '../../assets/icons/Icons';

interface Iprops {
  status: string;
}

const StatusButton: FC<Iprops> = ({ status }) => {
  return (
    <StatusWrapper>
      <StyledStatusButton className={status}>
        <span>
          {status.toLowerCase() === 'live' && <LiveIcon />}
          {status.toLowerCase() === 'upcoming' && <UpcomingIcon />}
          {status.toLowerCase() === 'replay' && <PlayIcon />}
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
  & .live-icon {
    color: #ffffff;
  }
  & .text {
    margin-left: 5px;
    font-size: 16px;
    text-transform: uppercase;
  }
`;

const StatusWrapper = styled.div`
  display: inline-block;
  & .live {
    background-color: #da0000;
  }
  & .upcoming {
    background-color: #606572;
  }

  & .replay {
    background-color: #f2984d;
  }
`;
