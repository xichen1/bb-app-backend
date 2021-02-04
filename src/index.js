require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');
const config = require('./utils/config');
const logger = require('./utils/logger');

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(result => {
    console.log('connected to MongoDB' + result);
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message);
  });

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});