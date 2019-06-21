//Running an express server with NUXT
//https://medium.com/@johnryancottam/running-nuxt-in-parallel-with-express-ffbd1feef83c

const express = require('express')
const app = express()
const usersRoute=require('./controllers/UserController.js')

app.get('/', (req, res, next) => {
  res.send('API root test')
})

app.use('/Users',usersRoute);

// export the server middleware
module.exports = {
  path: '/api',
  handler: app
}