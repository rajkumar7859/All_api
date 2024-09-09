const express = require('express'); // Ensure 'express' is installed
const jsonServer = require('json-server'); // Ensure 'json-server' is installed

const app = express();
const port = process.env.PORT || 3000;

app.use(jsonServer.defaults());
app.use(jsonServer.router('db.json'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
