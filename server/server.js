const express = require('express');
const connectDB = require('./db');
const authenticate = require('./middleware/authenticate');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

app.get('/', (_, res) => {
  res.send('Attendance system application is running now!');
});

app.use((err, _req, res) => {
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
