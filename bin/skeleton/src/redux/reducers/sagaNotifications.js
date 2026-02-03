import { createSlice } from '@reduxjs/toolkit';
import rutils from '00ricardo-utils';

const initialState = {
  errors: [],
  info: [],
};

const setSagaErrorsReducer = (state, action) => {
  if (rutils.hasValue(action.payload)) {
    const value = action.payload;
    state.errors = [...state.errors, value];
  }
};
const setSagaInfoReducer = (state, action) => {
  if (rutils.hasValue(action.payload)) {
    const value = action.payload;
    state.info = [...state.info, value];
  }
};
const resetSagaInfoReducer = (state, _action) => {
  state.info = [...initialState.info];
};
const resetSagaErrorsReducer = (state, _action) => {
  state.errors = [...initialState.errors];
};

const sagaNotifications = createSlice({
  name: 'sagaNotifications',
  initialState,
  reducers: {
    setSagaInfo: setSagaInfoReducer,
    setSagaErrors: setSagaErrorsReducer,
    resetSagaInfo: resetSagaInfoReducer,
    resetSagaErrors: resetSagaErrorsReducer,
  },
});

export const { setSagaErrors, resetSagaErrors, setSagaInfo, resetSagaInfo } =
  sagaNotifications.actions;

export default sagaNotifications.reducer;
