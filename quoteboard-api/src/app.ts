import 'source-map-support';

import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as mongoose from 'mongoose';
import * as morgan from 'morgan';
import * as passport from 'passport';

import * as cors from "cors";
import { NotFound } from 'http-errors';
import { MongoError } from 'mongodb';
import { Strategy as LocalStrategy } from 'passport-local';

import { UserDocument, User } from './models/user';

import { router as indexRouter } from './routes/index';
import { router as quotationsRouter } from './routes/quotations';
import { router as authRouter } from './routes/auth';

mongoose.connect('mongodb://localhost/quoteboard', { useMongoClient: true });
mongoose.connection.on('error', error => { throw error; });
(<any>mongoose).Promise = Promise;

const app = express();
const port = normalizePort();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(passport.initialize());

// Cors must comes before index Router
app.use(cors({
  allowedHeaders: ["Accept", "Authorization", "Content-Type", "X-Forwarded-For"],
  methods: ["GET", "POST", "PATCH", "DELETE"],
  origin: ["http://localhost:4200"]
}));

app.use('/', indexRouter);
app.use('/quotations', quotationsRouter);
app.use('/auth', authRouter);

// Catch 404 not found
app.use((req, res, next) => {
  next(new NotFound('URI not available'));
});

// Error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status);
  res.send({ error: err.message, code: err.code });
  // console.error(err.stack);
});

passport.use('local', new LocalStrategy({ 
  usernameField: 'email', 
  passwordField: 'password' 

}, async (email, password, done) => {
  try {
    const user = await User.findOne({ email });
    if (user.verifyPassword(password)) {
      done(null, user);
    } else {
      done(null, null);
    }
  } catch (err) {
    done(err);
  }
}));

passport.deserializeUser((user: UserDocument, done) => {
  done(null, user.id);
});

passport.serializeUser(async (id: string, done) => {
  const user = await User.findById(id);
  done(null, user);
});


app.listen(port, () => console.log(`Listening on port ${port}`));

function normalizePort(): number {
  const port = parseInt(process.env.PORT) || 3000;
  return port;
}
