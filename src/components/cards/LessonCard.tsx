import { FC } from 'react';
import styled from 'styled-components';
import { ClockIcon, PersonIcon } from '../../assets/icons/Icons';
import { LessonInterface } from '../../types/types';
import StatusButton from '../buttons/StatusButton';

const LessonCard: FC<LessonInterface> = ({
  topic,
  status,
  subject,
  tutor,
  startAt,
  imageUrl,
}) => {
  return (
    <StyledCardWrapper>
      <div className="card-header">
        <div className="status-button">
          <StatusButton status="live" />
        </div>
        <CardBody>
          <p className="subject physics">Physics</p>
          <p className="title">
            Materials - Metallic & Non Metallic Properties for physics
          </p>
          <div className="time-date mt-2">
            <span className="pt-1">
              <ClockIcon />
            </span>{' '}
            <span className="ml-1">Today,</span>
            <span className="ml-1">3 PM</span>
          </div>
          <div className="time-date">
            <span className="pt-1">
              <PersonIcon />
            </span>{' '}
            <span className="ml-1">John Kalu</span>
          </div>
        </CardBody>
      </div>
    </StyledCardWrapper>
  );
};

export default LessonCard;

const StyledCardWrapper = styled.div`
  width: 400px;
  margin-top: 20px;
  height: 360px;
  border-radius: 15px;
  background-color: #ffffff;
  margin-bottom: 10px;
  & .status-button {
    padding-left: 10px;
    padding-top: 140px;
  }
  & .card-header {
    height: 50%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-color: #7b7fda;
    background-image: url('/images/live-tile.png');
  }
`;

const CardBody = styled.div`
  padding: 20px;

  & .title {
    color: #313848;
    text-transform: capitalize;
    font-size: 16px;
    font-weight: 700;
  }
  & .time-date {
    display: flex;
    color: #838891;
    font-size: 17px;
  }
`;
