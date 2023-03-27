const fetchOptions = (method = 'GET') => ({
  method,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:3010',
  },
});

const URI = 'http://localhost:3010';

const apiService = {
  // Get candidate list
  getCandidates: () => {
    try {
      return new Promise((resolve, reject) => {
        try {
          fetch(`${URI}/candidates`, {
            ...fetchOptions('GET'),
          })
            .then((res) => {
              res.json().then((data) => {
                resolve(data);
              });
            })
            .catch((e) => {
              reject(e);
            });
        } catch (e) {
          reject(e);
        }
      });
    } catch (e) {
      return e;
    }
  },

  // Get specific application
  getApplication: (id) => {
    try {
      return new Promise((resolve, reject) => {
        try {
          fetch(`${URI}/applications/?id=${id}`, {
            ...fetchOptions('GET'),
          })
            .then((res) => {
              res.json().then((data) => {
                resolve(data);
              });
            })
            .catch((e) => {
              reject(e);
            });
        } catch (e) {
          reject(e);
        }
      });
    } catch (e) {
      return e;
    }
  },

  // Get specific question
  getQuestion: (id) => {
    try {
      return new Promise((resolve, reject) => {
        try {
          fetch(`${URI}/questions/?id=${id}`, {
            ...fetchOptions('GET'),
          })
            .then((res) => {
              res.json().then((data) => {
                resolve(data);
              });
            })
            .catch((e) => {
              reject(e);
            });
        } catch (e) {
          reject(e);
        }
      });
    } catch (e) {
      return e;
    }
  },
  // post the commment for a particular question and applicationId(user)
  postComment: (comment, applicationId, questionId) => {
    try {
      return new Promise((resolve, reject) => {
        try {
          fetch(`${URI}/comment/${applicationId}/${questionId}`, {
            ...fetchOptions('PATCH'),
            body: JSON.stringify({ comment }),
          })
            .then((res) => {
              res.json().then((data) => {
                resolve(data);
              });
            })
            .catch((e) => {
              reject(e);
            });
        } catch (e) {
          reject(e);
        }
      });
    } catch (e) {
      return e;
    }
  },
};

export default apiService;
