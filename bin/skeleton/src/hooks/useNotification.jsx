import React from 'react';
import { useSnackbar } from 'notistack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const useNotification = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const showSnackbar = (message, variant = 'default', options) => {
    const key = new Date().getTime() + Math.random();
    const action = () => (
      <Button color="white" onClick={() => closeSnackbar(key)}>
        Dismiss
      </Button>
    );
    enqueueSnackbar(<Typography fontSize={'inherit'}>{message}</Typography>, {
      key,
      variant,
      action,
      ...options,
    });
    return;
  };

  const showSuccessSnackbar = (message, options = {}) => {
    showSnackbar(message, 'success', options);
  };

  const showErrorSnackbar = (message, options = {}) => {
    showSnackbar(message, 'error', options);
  };

  const showWarningSnackbar = (message, options = {}) => {
    showSnackbar(message, 'warning', options);
  };

  const showInfoSnackbar = (message, options = {}) => {
    showSnackbar(message, 'info', options);
  };

  return {
    showSnackbar,
    showSuccessSnackbar,
    showErrorSnackbar,
    showWarningSnackbar,
    showInfoSnackbar,
  };
};

export default useNotification;
