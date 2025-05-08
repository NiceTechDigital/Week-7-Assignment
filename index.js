const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const itemRoutes = require('./itemRoutes');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/items', itemRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 5000, () =>
      console.log('Server running & DB connected')
    );
  })
  .catch(err => console.error('MongoDB connection error:', err));
