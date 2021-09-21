import { formatDistanceToNow } from 'date-fns';
import { format } from 'date-fns/esm';
import { FC } from 'react';
import styled from 'styled-components';
import { ClockIcon, PersonIcon } from '../../assets/icons/Icons';
import { LessonInterface, StyleProps } from '../../types/types';
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
    <StyledCardWrapper bgImage={imageUrl}>
      <div className="card-header">
        <div className="status-button">
          <StatusButton status={status} />
        </div>
        <CardBody>
          <p className={`subject ${subject?.name.toLowerCase()}`}>
            {subject?.name}
          </p>
          <p className="title">{topic}</p>
          <div className="time-date mt-1">
            <span className="pt-1">
              <ClockIcon />
            </span>{' '}
            <span className="ml-1">
              {formatDistanceToNow(new Date(startAt ? startAt : Date.now()), {
                addSuffix: true,
              })}
              ,
            </span>
            <span className="ml-1">
              {format(new Date(startAt ? startAt : Date.now()), 'h:m b')}
            </span>
          </div>
          <div className="time-date">
            <span className="pt-1">
              <PersonIcon />
            </span>{' '}
            <span className="ml-1">
              {tutor?.firstname} {tutor?.lastname}
            </span>
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
    background-image: ${(props: StyleProps) => `url(${props.bgImage})`};
  }
  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.medium}) {
    width: 100%;
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
