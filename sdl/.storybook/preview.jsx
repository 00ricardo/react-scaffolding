import React from 'react';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();
import Starterwrapper from './wrapper';

export default {
  decorators: [
    (Story) => {
      return (
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <SnackbarProvider maxSnack={10}>
              <Starterwrapper
                user={''}
                baseURL={
                  ''
                }
              >
                <Story />
              </Starterwrapper>
            </SnackbarProvider>
          </QueryClientProvider>
        </Provider>
      );
    },
  ],
};
