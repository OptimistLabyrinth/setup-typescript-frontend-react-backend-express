import express from 'express'
const indexRouter = express.Router()

indexRouter.get('/', function(req, res, next) {
  res.json({ title: 'Express', location: '/' })
})

export default indexRouter
