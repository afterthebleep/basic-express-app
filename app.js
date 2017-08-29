const express = require('express')
const app = express()
const port = 8000

// setup with asyn callback and error handling
app.listen(port, (err, res) => {
  if(err) {
    console.log('Error')
  } else {
    console.log('Success! ' + 'Listening on Port 8000')
    }
})
