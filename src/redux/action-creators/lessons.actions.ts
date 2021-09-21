import { lessonActionTypes } from './../action-types/lesson-action.types';
import { Dispatch } from 'redux';
import axios from 'axios';

/**
 * @description fetch only promoted lessons data
 * @returns Response data
 */
export const getPromotedLiveLessons = () => async (dispatch: Dispatch) => {
  let url = '/promoted';
  dispatch({
    type: lessonActionTypes.LOADING,
    payload: true,
  });
  try {
    let response = await axios.get(url);
    const { success, data } = response?.data;
    if (success) {
      dispatch({
        type: lessonActionTypes.GET_PROMOTED_LIVE_LESSONS,
        payload: data,
      });
      dispatch({
        type: lessonActionTypes.LOADING,
        payload: false,
      });
      return data;
    }
  } catch (error) {
    dispatch({
      type: lessonActionTypes.LOADING,
      payload: false,
    });
    return error;
  }
};

/**
 * @description fetch general lessons
 * @returns Response data
 */
export const getAllLessons = () => async (dispatch: Dispatch) => {
  let url = '/lessons';
  dispatch({
    type: lessonActionTypes.LOADING,
    payload: true,
  });
  try {
    let response = await axios.get(url);
    const { success, data } = response?.data;
    if (success) {
      dispatch({
        type: lessonActionTypes.GET_ALL_LESSONS,
        payload: data,
      });
      dispatch({
        type: lessonActionTypes.LOADING,
        payload: false,
      });
      return data;
    }
  } catch (error) {
    dispatch({
      type: lessonActionTypes.LOADING,
      payload: false,
    });
    return error;
  }
};

/**
 * @description fetch my lessons
 * @returns Response data
 */
export const getMyLessons = () => async (dispatch: Dispatch) => {
  let url = '/lessons/me';
  dispatch({
    type: lessonActionTypes.LOADING,
    payload: true,
  });
  try {
    let response = await axios.get(url);
    const { success, data } = response?.data;
    if (success) {
      dispatch({
        type: lessonActionTypes.GET_MY_LESSONS,
        payload: data,
      });
      dispatch({
        type: lessonActionTypes.LOADING,
        payload: false,
      });
      return data;
    }
  } catch (error) {
    dispatch({
      type: lessonActionTypes.LOADING,
      payload: false,
    });
    return error;
  }
};
