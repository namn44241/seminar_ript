console.log('Hello from the server console!');
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/time') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const currentTime = new Date().toLocaleTimeString();
    const responseData = JSON.stringify({ time: currentTime });
    res.end(responseData);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
