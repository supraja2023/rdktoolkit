import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../service/auth';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});