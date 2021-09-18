import { FC } from 'react';
import styled from 'styled-components';
import { ClockIcon, LiveIcon } from '../../assets/icons/Icons';
import StatusButton from '../buttons/StatusButton';
import { SliderTileProps } from '../../types/types';

const SliderTile: FC<SliderTileProps> = ({ topic, status, startAt, tutor }) => {
  return (
    <StyledTile>
      <TileInfo>
        <StatusButton status={status} />
        <p className="title">{topic}</p>
        <div className="d-flex">
          <div className="day-time">
            <span className="mt-1">
              <ClockIcon />
            </span>
            <span className="mx-2">{startAt}</span>
          </div>
          <div className="day-time mx-2">
            <span>
              <LiveIcon />
            </span>
            <span className="mx-2 name">
              {tutor.firstname} {tutor.lastname}
            </span>
          </div>
        </div>
      </TileInfo>
    </StyledTile>
  );
};

export default SliderTile;

const StyledTile = styled.div`
  min-width: 720px;
  height: 300px;
  border-radius: 15px;
  background-color: #7b7fda;
  background-image: url('/images/live-home.png');
  margin: 10px;
  & .title {
    color: #ffffff;
    text-transform: capitalize;
    font-weight: bold;
    font-size: 33px;
    margin-top: 10px;
  }
  .name {
    text-transform: capitalize;
  }
  & .day-time {
    display: flex;
    color: #ffffff;
    font-size: 23px;
  }
`;

const TileInfo = styled.div`
  margin-top: 150px;
  padding-left: 30px;
`;
