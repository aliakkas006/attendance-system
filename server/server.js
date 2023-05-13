const express = require('express');
const connectDB = require('./db');
const authenticate = require('./middleware/authenticate');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

app.get('/private', authenticate, (_req, res) => {
  return res.status(200).json({ message: 'This is private route' });
});

app.get('/public', authenticate, (_req, res) => {
  return res.status(200).json({ message: 'This is public route' });
});

app.get('/', (_, res) => {
  const obj = {
    name: 'Akkas',
    email: 'ali@gmail.com',
  };
  res.json(obj);
});

app.use((err, req, res, next) => {
  console.log(err);

  const message = err.message ? err.message : 'Server Error Occured';
  const status = err.status ? err.status : 500;

  res.status(status).json({ message });
});

connectDB('mongodb://localhost:27017/attendance-db')
  .then(() => {
    console.log('Database connected!');
    app.listen(4444, () => {
      console.log('Server is running on port 4444');
    });
  })
  .catch((err) => console.log('database error', err));
