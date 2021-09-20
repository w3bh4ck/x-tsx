import styled from 'styled-components';
import StatusButton from '../buttons/StatusButton';

const LessonCard = () => {
  return (
    <StyledCardWrapper>
      <div className="card-header">
        <div className="status-button">
          <StatusButton status="live" />
        </div>
      </div>
    </StyledCardWrapper>
  );
};

export default LessonCard;

const StyledCardWrapper = styled.div`
  width: 400px;
  margin-top: 20px;
  height: 350px;
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
