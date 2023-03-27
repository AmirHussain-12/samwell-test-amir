import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { Loading, Card } from './index';
import { apiService } from '../services';

function Responses({ id }) {
  // This component is the parent component of Card and will display all the responses
  // for a particular candidate. It takes the id of applicant and fetches the responses from
  // backend.
  const [videos, setVideos] = useState([]);
  const [applicationId, setApplicationId] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    apiService.getApplication(id).then((res) => {
      setVideos(res[0].videos);
      setApplicationId(res[0].id);
      setLoading(false);
    });

    setLoading(false);
  }, [id]);

  if (loading) return <Loading />;

  let responseContent;

  if (loading) responseContent = <Loading />;

  if (videos.length > 0) {
    responseContent = videos.map((video) => (
      <Card video={video} applicationId={applicationId} id={id} key={uuidv4()} />
    ));
  } else {
    responseContent = <p>No response found</p>;
  }

  return responseContent;
}

export default Responses;

Responses.propTypes = {
  id: PropTypes.string.isRequired,
};
