import { lessonActionTypes } from './../action-types/lesson-action.types';

interface Action {
  type: string;
  payload: string;
}

const initialState = {
  promotedLiveLessons: [],
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case lessonActionTypes.GET_PROMOTED_LIVE_LESSONS:
      return { ...state, promotedLiveLessons: action.payload };
    default:
      return state;
  }
};
