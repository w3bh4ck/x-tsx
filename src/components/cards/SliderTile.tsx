import React from 'react';
import styled from 'styled-components';
import { ClockIcon, LiveIcon } from '../../assets/icons/Icons';
import StatusButton from '../buttons/StatusButton';
import { SliderTileProps, StyleProps } from '../../types/types';
import { formatDistanceToNow, format } from 'date-fns';

const SliderTile = React.forwardRef<HTMLDivElement, SliderTileProps>(
  (props, ref) => {
    const { topic, status, startAt, tutor, imageUrl } = props;

    return (
      <StyledTile ref={ref} bgImage={imageUrl}>
        <TileInfo>
          <StatusButton status={status} />
          <p className="title">{topic}</p>
          <div className="d-flex">
            <div className="day-time">
              <span className="mt-1">
                <ClockIcon />
              </span>
              <span className="mx-2">
                {formatDistanceToNow(new Date(startAt ? startAt : Date.now()), {
                  addSuffix: true,
                })}
              </span>
              <span>
                {format(new Date(startAt ? startAt : Date.now()), 'h:m b')}
              </span>
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
  }
);

export default SliderTile;

const StyledTile = styled.div`
  min-width: 700px;
  height: 228px;
  border-radius: 15px;
  background-color: #7b7fda;
  background-image: ${(props: StyleProps) => `url(${props.bgImage})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 10px;
  & .title {
    color: #ffffff;
    text-transform: capitalize;
    font-weight: bold;
    font-size: 18px;
  }
  .name {
    text-transform: capitalize;
  }
  & .day-time {
    display: flex;
    color: #ffffff;
    font-size: 16px;
  }
`;

const TileInfo = styled.div`
  margin-top: 120px;
  padding-left: 30px;
`;
