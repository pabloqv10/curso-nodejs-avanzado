const runMiddleware = (req, res, middlewares) => {
  console.log('Running middleware');

  let index = 0;
  const next = () => {
    if (index < middlewares.length) {
      const middleware = middlewares[index++];
      middleware(req, res, next);
    }
  };
  next();
};

const middleware1 = (req, res, next) => {
  console.log('Middleware 1: authentication');
  req.authenticated = true;
  req.user = { id: 1, name: 'John Doe' };
  next();
};

const middleware2 = (req, res, next) => {
  console.log('Middleware 2: processing request');
  next();
};

const middleware3 = (req, res, next) => {
  console.log('Middleware 3: final processing');
  next();
};


const req = {};
const res = {};

console.log('start', req);
runMiddleware(req, res, [middleware1, middleware2, middleware3]);
console.log('end', req);