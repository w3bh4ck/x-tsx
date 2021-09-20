import { FC, useRef, createRef, useState } from 'react';
import styled from 'styled-components';
import { LeftArrow, RightArrow } from '../../assets/icons/Icons';
import SliderTile from '../../components/cards/SliderTile';
import { LiveLessonDataInterface, TypeTutor } from '../../types/types';

const LiveSlider: FC<LiveLessonDataInterface> = ({ promotedLessons }) => {
  const [pointerState, setPointerState] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef(
    promotedLessons.map(() => createRef<HTMLDivElement>())
  );

  /**
   * @function
   * @description Control the scroll event of the slider and estimate the position of the pointer highlight
   * @param scrollOffset Offset value to be added to the scrollLeft value whenever the scroll button is clicked
   */
  const scroll = (scrollOffset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollOffset;
      let visibleWidth =
        (scrollRef.current.scrollWidth as number) / promotedLessons.length;
      let estimatedPosition = Math.ceil(
        scrollRef.current.scrollLeft / visibleWidth
      );
      setPointerState(estimatedPosition);
    }
  };

  return (
    <div>
      <StyledLiveSlider ref={scrollRef}>
        {pointerState > 0 && (
          <StyledLeftButton onClick={() => scroll(-500)}>
            <LeftArrow />
          </StyledLeftButton>
        )}
        {promotedLessons.map((lesson, i) => (
          <SliderTile
            tutor={lesson?.tutor as TypeTutor}
            status={lesson?.status as string}
            startAt={lesson.start_at as string}
            topic={lesson?.topic as string}
            imageUrl={lesson?.image_url as string}
            key={`key_${i}`}
            ref={slideRef.current[i]}
          />
        ))}
        {pointerState !== promotedLessons.length - 2 && (
          <StyledRightButton onClick={() => scroll(500)}>
            <RightArrow />
          </StyledRightButton>
        )}
      </StyledLiveSlider>
      <StyledIndicatorWrapper>
        {promotedLessons.length
          ? Array.from(Array(promotedLessons?.length - 1), (elem, index) => {
              return (
                <StyledIndicator
                  color={index === pointerState ? '#313848' : '#b5b7bc'}
                />
              );
            })
          : ''}
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
  border-width: 2px;
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
  margin-top: 90px;
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
  margin-top: 90px;
`;
