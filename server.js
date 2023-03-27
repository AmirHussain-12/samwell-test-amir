const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('api.json');

const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
  res.jsonp({ status: 200, statusText: 'ok' });
});

server.get('/test', (req, res) => {
  res.jsonp({ status: 200, statusText: 'ok' });
});

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);

server.patch('/comment/:applicationId/:questionId', (req, res) => {
  const applicationId = parseInt(req.params.applicationId, 10);
  const questionId = parseInt(req.params.questionId, 10);

  const applications = router.db
    .get('applications')
    .find((c) => c.id === applicationId)
    .value();

  const videoObject = applications.videos.find(
    (video) => video.questionId === questionId,
  );

  const comment = req?.body?.comment;

  const initialLength = videoObject.comments.length;

  if (comment && comment.length > 0) {
    if (Array.isArray(videoObject.comments)) {
      videoObject.comments.push(comment);
    } else {
      videoObject.comments = [comment];
    }
  }
  router.db.write();
  const finalLength = videoObject.comments.length;
  if (finalLength > initialLength) {
    res.jsonp({ status: 200, statusText: 'ok' });
  } else {
    res.jsonp({ status: 501, statusText: 'ok' });
  }
});
// Use default router
server.use(router);
server.listen(3010, () => {
});
