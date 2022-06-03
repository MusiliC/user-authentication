import { actionTypes } from "../actions/actionType";
const user = JSON.parse(localStorage.getItem('user'))

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_USER:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };

    case actionTypes.LOGIN_USER:
      console.log(action.payload);
      return{
        ...state,
        isLoggedIn: false,
        user: action.payload
      }  

    default:
      return state;
  }
};

export default userReducer;
