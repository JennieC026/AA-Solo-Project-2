const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

const { environment } = require('./config');
const isProduction = environment === 'production';

const app = express();

app.use(cookieParser());
app.use(express.json());

if(!isProduction){
    app.use(cors());
}

//helmet
app.use(
    helmet.crossOriginResourcePolicy({
      policy: "cross-origin"
    })
  );

  //_csrf token
  app.use(
    csurf({
      cookie: {
        secure: isProduction,
        sameSite: isProduction && "Lax",
        httpOnly: true
      }
    })
  );

  const routes = require('./routes');
  app.use(routes);



  module.exports = app;