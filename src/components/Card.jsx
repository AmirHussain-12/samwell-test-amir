import React from 'react';
import PropTypes from 'prop-types';

import { Video, Question, Comment } from './index';

import './CardStyles.css';

function Card({ video, applicationId, id }) {
  // This Card component is responsible for displaying the Question, video response and comments
  return (
    <div className="card" data-testid={id}>
      <Question id={video.questionId} />
      <div className="videoContainer">
        <Video src={video.src} />
      </div>
      <Comment
        comments={video.comments}
        questionId={video.questionId}
        applicationId={applicationId}
      />
    </div>
  );
}

Card.propTypes = {
  video: PropTypes.shape({
    questionId: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  applicationId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default Card;
