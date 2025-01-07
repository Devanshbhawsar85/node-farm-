const fs = require('fs');
const http = require('http');
const url = require('url');
const slugify = require('slugify');
const replaceTemplate = require('./modules/replaceTemplate');

const server = http.createServer((req, res) => {
  res.end('hell');
});
server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000');
});