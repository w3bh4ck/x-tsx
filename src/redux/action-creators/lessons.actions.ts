import { lessonActionTypes } from './../action-types/lesson-action.types';
import { Dispatch } from 'redux';
import axios from 'axios';

export const getPromotedLiveLessons = () => async (dispatch: Dispatch) => {
  let url = '/promoted';
  try {
    let response = await axios.get(url);
    const { success, data } = response?.data;
    if (success) {
      dispatch({
        type: lessonActionTypes.GET_PROMOTED_LIVE_LESSONS,
        payload: data,
      });
      return data;
    }
  } catch (error) {
    return error;
  }
};
