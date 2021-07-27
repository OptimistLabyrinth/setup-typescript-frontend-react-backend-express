import path from 'path'
import express, { Request, Response, NextFunction } from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import createHttpError from 'http-errors'
import { ROOT } from '../projectRoot'

import indexRouter from '../api'
import usersRouter from '../api/users'

const App = express()
App.use(logger('dev'))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(cookieParser())
  .use(express.static(path.join(ROOT, '../frontend/build')))

App.use('/api', indexRouter)
  .use('/api/users', usersRouter)

// catch 404 and forward to error handler
App.use((err: any, req: Request, res: Response, next: NextFunction) => {
  next(createHttpError(404))
})

// error handler
App.use((err: any, req: Request, res: Response, next: NextFunction) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default App
