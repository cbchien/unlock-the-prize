import { combineReducers } from 'redux';

import user from './user';
import isFetchingUser from './isFetchingUser';
import isLoggingIn from './isLoggingIn';
import isLoggingOut from './isLoggingOut';
import isSigningup from './isSigningup';
import isSavingJob from './isSavingJob';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
  user,
  isFetchingUser,
  isLoggingIn,
  isLoggingOut,
  isSigningup,
  isSavingJob,
  form: reduxFormReducer,
});

export default rootReducer;
