import { createServer } from 'http';

const hostname = '127.0.0.1';

const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;

  res.setHeader('Content-Type', 'text/plain');

  res.end('Hell Nodejs');
});

server.listen(port, hostname, () => {
  console.log(`Server running at ${hostname}:${port}/`);
});
