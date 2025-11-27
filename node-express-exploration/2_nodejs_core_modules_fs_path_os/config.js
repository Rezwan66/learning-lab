require('dotenv').config();

const config = {
  app: {
    name: process.env.APP_NAME || 'DefaultApp',
    version: process.env.APP_VERSION || '1.0.0',
    port: process.env.PORT || 8080,
    env: process.env.NODE_ENV || 'Dev',
  },
};

console.log(config.app);

module.exports = config;
