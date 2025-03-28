const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const taskRoutes = require('./routes/taskRoutes');

app.use(express.json());

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
