import * as api from "../../api/index"
import { actionTypes } from "./actionType"

export const createUser = (user) => async (dispatch) => {
  try {
    const response = await api.addUser(user);
    dispatch({
      type: actionTypes.CREATE_USER,
      payload: response.data,
    });
    
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = (user) => async (dispatch) => {
  try {
    const response = await api.logUser(user);
    dispatch({
      type: actionTypes.LOGIN_USER,
      payload: response.data
    })
  } catch (error) {
    console.log(error);
  }
}