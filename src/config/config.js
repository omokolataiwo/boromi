require('dotenv').config();

module.exports = {
  "development": {
    "use_env_variable": "DEV_DATABASE_URL",
    "url": process.env.DEV_DATABASE_URL
  },
  "test": {
    "use_env_variable": "TEST_DATABASE_URL",
    "url": process.env.TEST_DATABASE_URL
  },
  "production": {
    "use_env_variable": "PROD_DATABASE_URL",
    "url": process.env.PROD_DATABASE_URL
  }
}