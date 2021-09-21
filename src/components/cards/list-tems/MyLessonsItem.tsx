import { formatDistanceToNow, format } from 'date-fns';
import { FC } from 'react';
import styled from 'styled-components';
import { ClockIcon, PersonIcon } from '../../../assets/icons/Icons';
import { LessonInterface, StyleProps } from '../../../types/types';
import StatusButton from '../../buttons/StatusButton';

const MyLessonItem: FC<LessonInterface> = ({
  topic,
  status,
  subject,
  tutor,
  startAt,
  imageUrl,
}) => {
  return (
    <ItemWrapper bgImage={imageUrl}>
      <div className="lesson-image">
        <div className="status">
          <StatusButton status={status} />
        </div>
      </div>
      <div className="item-content px-3">
        <p className={`${subject?.name.toLowerCase()} subject`}>
          {subject?.name}
        </p>
        <p className="title">{topic}</p>
        <div className="time-date">
          <span className="pt-1">
            <ClockIcon />
          </span>{' '}
          <span className="ml-1 pt-1">
            {formatDistanceToNow(new Date(startAt ? startAt : Date.now()), {
              addSuffix: true,
            })}
            , {format(new Date(startAt ? startAt : Date.now()), 'h:m b')}
          </span>
        </div>
        <div className="time-date">
          <span className="pt-1">
            <PersonIcon />
          </span>{' '}
          <span className="ml-1 pt-1">
            {tutor?.firstname} {tutor?.lastname}
          </span>
        </div>
      </div>
    </ItemWrapper>
  );
};

export default MyLessonItem;

const ItemWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  & .lesson-image {
    height: 130px;
    width: 50%;
    background-color: #7b7fda;
    background-image: ${(props: StyleProps) => `url(${props.bgImage})`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 9px;
  }
  & .title {
    color: #313848;
    text-transform: capitalize;
    font-size: 16px;
    font-weight: 700;
  }
  & .status {
    padding-top: 95px;
    padding-left: 10px;
  }
  & .time-date {
    display: flex;
    color: #838891;
    font-size: 14px;
  }
`;
