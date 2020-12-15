const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const error = require('./middleware/error');
const { databaseUrl, port } = require('./config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.use(error);

mongoose
  .connect(databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log(`Connected to ${databaseUrl}`))
  .catch((error) => console.log(error.message));

app.listen(port || 9001, () => console.log('Listening on port 9001'));
