import React from 'react';
import styled from 'styled-components';
import { ClockIcon, PersonIcon } from '../../../assets/icons/Icons';
import StatusButton from '../../buttons/StatusButton';

const MyLessonItem = () => {
  return (
    <ItemWrapper>
      <div className="lesson-image">
        <div className="status">
          <StatusButton status="live" />
        </div>
      </div>
      <div className="item-content px-3">
        <p className="physics subject">Physics</p>
        <p className="title">Materials - Metallic & Non Metallic Properties</p>
        <div className="time-date">
          <span className="pt-1">
            <ClockIcon />
          </span>{' '}
          <span className="ml-1 pt-1">Today, 3:30PM</span>
        </div>
        <div className="time-date">
          <span className="pt-1">
            <PersonIcon />
          </span>{' '}
          <span className="ml-1 pt-1">Amadi Lucky</span>
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
