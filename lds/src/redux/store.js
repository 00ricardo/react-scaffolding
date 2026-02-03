import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';
// Create the Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure store
const store = configureStore({
  reducer: {
    notificationsReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(), // Spread in the default middleware
    sagaMiddleware, // Add the Saga middleware
  ],
});

// Run the root saga
sagaMiddleware.run(rootSaga);

export default store;
