function customMiddleware(req, res, next) {
  const allowedOrigins = ['http://localhost:3000']; // Replace with your specific URL
  const { origin } = req.headers;

  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  next();
}

module.exports = customMiddleware;
