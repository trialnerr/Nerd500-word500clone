const express = require('express');
const app = express();
const path = require('path');

// statically serve everything in the build folder on the route '/build'
if (process.env.NODE_ENV === 'production') {
  // serve index.html on the route '*'
  app.get('*', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
  app.use('/build', express.static(path.join(__dirname, '../build')));
}


app.listen(3000, () => console.log('I am listening on port 3000')); //listens on port 3000 -> http://localhost:3000/
