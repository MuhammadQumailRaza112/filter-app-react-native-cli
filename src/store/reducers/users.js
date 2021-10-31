import { SET_USERS, SET_LOADING } from "../constants";

const initialState = {users:[], isLoading:false};

const Users = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {...state,users:action.payload};

      case SET_LOADING:
      return {...state,isLoading:action.payload};
   
      default:
      return state;
  }
};

export default Users;