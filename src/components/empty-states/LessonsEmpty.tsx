import { FC } from 'react';
import styled from 'styled-components';
import { EmptyStateInterface } from '../../types/types';

const LessonsEmpty: FC<EmptyStateInterface> = ({
  title,
  description,
  children,
}) => {
  return (
    <EmptyStateWrapper>
      <EmptyStateContent>
        <div className="image-container">{children}</div>
        <p className="state-title">{title}</p>
        <p className="state-desc">{description}</p>
      </EmptyStateContent>
    </EmptyStateWrapper>
  );
};

export default LessonsEmpty;

const EmptyStateWrapper = styled.div`
  padding: 10px 50px 10px 50px;
  width: 100%;
`;

const EmptyStateContent = styled.div`
  width: 100%;
  height: 288px;
  background-color: #ffffff;
  border-radius: 15px;
  justify-content: center;
  font-family: 'Itim', cursive;
  & .state-title {
    color: #313848;
    text-transform: capitalize;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    padding-top: 30px;
  }
  & .state-desc {
    color: #838891;
    font-size: 17px;
    text-align: center;
  }
  & .image-container {
    padding-top: 40px;
    display: flex;
    justify-content: center;
  }
`;
