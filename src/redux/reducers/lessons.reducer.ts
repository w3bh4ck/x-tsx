import { lessonActionTypes } from './../action-types/lesson-action.types';

interface Action {
  type: string;
  payload: string;
}

const initialState = {
  promotedLiveLessons: [],
  allLessons: [],
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case lessonActionTypes.GET_PROMOTED_LIVE_LESSONS:
      return { ...state, promotedLiveLessons: action.payload };
    case lessonActionTypes.GET_ALL_LESSONS:
      return { ...state, allLessons: action.payload };
    default:
      return state;
  }
};
