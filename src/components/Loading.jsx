import React from 'react';
import { Box, CircularProgress } from '@mui/material';

function Loading() {
  // This is the basic component for showing the loader.
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      data-testid="loading"
    >
      <CircularProgress />
    </Box>
  );
}

export default Loading;
