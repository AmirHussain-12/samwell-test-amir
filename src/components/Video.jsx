import React from 'react';
import PropTypes from 'prop-types';

function Video({ src }) {
  // A simple component that displays a the video responses of candidates.
  return (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <video width="100%" height="480" controls>
      <source type="video/mp4" src={src} />
      Your browser does not support the video tag.
    </video>
  );
}
Video.propTypes = {
  src: PropTypes.string.isRequired,
};
export default Video;
