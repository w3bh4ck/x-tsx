import { FC, useRef } from 'react';
import styled from 'styled-components';
import { LeftArrow, RightArrow } from '../../assets/icons/Icons';
import SliderTile from '../../components/cards/SliderTile';
import { LiveLessonDataInterface, TypeTutor } from '../../types/types';

const LiveSlider: FC<LiveLessonDataInterface> = ({ promotedLessons }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (scrollOffset: number) => {
    if (scrollRef.current) scrollRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div>
      <StyledLiveSlider ref={scrollRef}>
        <StyledLeftButton onClick={() => scroll(-500)}>
          <LeftArrow />
        </StyledLeftButton>
        {promotedLessons.map((lesson, i) => (
          <SliderTile
            tutor={lesson?.tutor as TypeTutor}
            status={lesson?.status as string}
            topic={lesson?.topic as string}
            imageUrl={lesson?.image_url as string}
            key={i}
          />
        ))}
        <StyledRightButton onClick={() => scroll(500)}>
          <RightArrow />
        </StyledRightButton>
      </StyledLiveSlider>
      <StyledIndicatorWrapper>
        <StyledIndicator color="#b5b7bc" />
        <StyledIndicator color="#b5b7bc" />
        <StyledIndicator color="#313848" />
        <StyledIndicator color="#313848" />
      </StyledIndicatorWrapper>
    </div>
  );
};

export default LiveSlider;

const StyledLiveSlider = styled.div`
  padding-top: 30px;
  display: flex;
  width: 100%;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledIndicator = styled.hr`
  border-width: 4px;
  border-color: ${props => props.color};
  width: 64px;
  margin: 5px;
  border-radius: 14px;
`;

const StyledIndicatorWrapper = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;
`;

export const StyledRightButton = styled.div`
  height: 56px;
  width: 56px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  padding-top: 20px;
  cursor: pointer;
  background-color: #ffffff;
  position: absolute;
  right: 0;
  margin-top: 130px;
`;

export const StyledLeftButton = styled.div`
  height: 56px;
  width: 56px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  padding-top: 20px;
  cursor: pointer;
  background-color: #ffffff;
  position: absolute;
  left: 0;
  margin-top: 130px;
`;
