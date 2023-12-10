// src/redux/reducers/userReducer.js
const initialState = {
    users: [],
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USERS':
        return {
          ...state,
          users: action.payload,
        };
      case 'ADD_USER':
        return {
          ...state,
          users: [...state.users, action.payload],
        };
        case 'UPDATE_USER':
      const updatedUsers = state.users.map((user) =>
        user._id === action.payload._id ? action.payload : user
      );
      return {
        ...state,
        users: updatedUsers,
      };
    case 'DELETE_USER':
      const remainingUsers = state.users.filter((user) => user._id !== action.payload._id);
      return {
        ...state,
        users: remainingUsers,
      };
      default:
        return state;
    }
  };
  
  export default userReducer;
  