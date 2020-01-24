const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors')
const middleWare = require('./middleWare')

const app = express()

app.use(cors())

/* Routes */

app.get('/test', async (req, res, next) => {
  try {
    res.status(200).json({
      status: '200',
      message: 'OK'
    })
  } catch(err) {
    return next(err)
  }
})

app.post('/register', middleWare, async (req, res, next) => {
  try {
    res.status(200).json({
      status: '200',
      message: 'user has been created'
    })
  } catch(err) {
    return next(err)
  }
})




exports.app = functions.https.onRequest(app)
