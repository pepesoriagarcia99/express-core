const banner = require('./src/banner');
const response = require('./src/utils/response');

const injectionWinjectionorker = require('./src/decorators/injection/index.js');

banner();

module.exports = function (ip, port, apiRoot) {

    const server = expressWs(express());
    const { app } = server;

    app.use(compression());

    app.use(express.urlencoded({ extended : false }));
    app.use(express.json());

    app.use(response);

  return app;
};

// sera el core el que tendra que añadir las configuraciones de ecmascript
