import { lessonActionTypes } from './../action-types/lesson-action.types';

interface Action {
  type: string;
  payload: string;
}

const initialState = {
  liveLessons: {},
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case lessonActionTypes.GET_LIVE_LESSONS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
