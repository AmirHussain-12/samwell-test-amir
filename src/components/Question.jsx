import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { apiService } from '../services';

function Question({ id }) {
  // This is a child component for Card which takes the question id and get the relevent question
  // from api and displays it.
  const [question, setQuestion] = useState('');

  useEffect(() => {
    if (id) {
      apiService.getQuestion(id).then((res) => {
        setQuestion(res[0].question);
      }).catch(() => { });
    }
  }, []);

  return (
    <Box padding={2} paddingBottom={0}>
      <Typography variant="subtitle1" gutterBottom>
        Question
      </Typography>
      <Typography variant="body2" gutterBottom>
        {question}
      </Typography>
    </Box>
  );
}
Question.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Question;
