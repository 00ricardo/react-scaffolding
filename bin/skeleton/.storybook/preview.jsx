import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import theme from '../MUITheme';
const queryClient = new QueryClient();
import ApplicationWrapper from './ApplicationWrapper';

export default {
  decorators: [
    (Story) => {
      return (
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <SnackbarProvider maxSnack={5}>
              <ThemeProvider theme={theme}>
                <ApplicationWrapper>
                  <Story />
                </ApplicationWrapper>
              </ThemeProvider>
            </SnackbarProvider>
          </QueryClientProvider>
        </Provider>
      );
    },
  ],
};
