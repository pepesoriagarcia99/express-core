export default (req, res, next) => {
  const responseOptions = (res) => ({
    json: (entity) => res.json(entity).end(),
    xml: (entity) => {
      res.header('Content-Type', 'application/xml');
      res.send(entity).end();
    },
    text: (entity) => {
      res.header('Content-Type', 'text/plain; charset=UTF-8');
      res.send(entity).end();
    }
  });

  res.success = (status = 200) => {
    const successRes = res.status(status);
    if (status === 204) {
      return successRes.end();
    }

    return responseOptions(successRes);
  };

  res.badRequest = () => res.status(400).end();
  res.unautorized = () => res.status(401).end();
  res.notFound = () => res.status(404).end();

  res.serverError = (err) => {
    const errorRes = res.status(500);
    if (!err) {
      return errorRes.json('Server error').end();
    }

    return responseOptions(errorRes);
  };

  next();
};
