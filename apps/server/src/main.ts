import * as dotenv from 'dotenv';
import express from 'express';

dotenv.config();
const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to server!' });
});

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
