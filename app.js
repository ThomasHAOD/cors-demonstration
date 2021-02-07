const express = require('express');
const bodyParser = require('body-parser');
const corsHeaders = require('./middleware/cors-headers');

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.use(corsHeaders);

app.get('/', (request, response) => {
  response.json({
    info: 'This is a CORS Test, you have successfully hit the API',
  });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
