import React, { useState, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { Box, Typography, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import InputAdornment from '@mui/material/InputAdornment';

import { apiService } from '../services';

function Comment({ questionId, comments, applicationId }) {
  // This component is a child component for card component which displays comments lists
  // and a text field to post comments. When user enter comment in text-field and hit the send
  // button the comment will be automatically posted.
  const [message, setMessage] = useState('');
  const [commentList, setComment] = useState([]);

  useEffect(() => {
    // Array.isArray(comments) ? setComment(comments) : setComment([comments]);
    if (Array.isArray(comments)) {
      setComment(comments);
    } else {
      setComment([comments]);
    }
  }, [comments]);

  const handleInputChange = (evt) => {
    setMessage(evt.target.value);
  };

  const handleSend = () => {
    setMessage('');
    apiService.postComment(message, applicationId, questionId).then((res) => {
      if (res.status === 200) {
        setComment([...commentList, message]);
      }
    });
  };

  return (
    <Box padding={2} paddingBottom={3}>
      <h4>Comments</h4>
      {commentList.length >= 0 && commentList[0] !== '' ? (
        commentList.map((comment) => (
          <Typography key={uuidv4()} variant="body2" gutterBottom marginTop={1}>
            {comment}
          </Typography>
        ))
      ) : (
        <p>NO comments found</p>
      )}

      <TextField
        label="Type a Comment"
        variant="outlined"
        value={message}
        onChange={handleInputChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSend}>
                <SendIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
Comment.propTypes = {
  questionId: PropTypes.number.isRequired,
  comments: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  applicationId: PropTypes.number.isRequired,
};

export default Comment;
