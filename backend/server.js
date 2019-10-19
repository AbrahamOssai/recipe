import http from 'http';
import app from './app';

const PORT = process.env.PORT;

app.set('port', PORT || 3000);

const server = http.createServer(app);

server.listen(PORT || 3000, () => {
  console.log(`Listening on Port ${PORT}`);
});