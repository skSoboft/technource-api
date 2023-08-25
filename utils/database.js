const mongoose = require('mongoose');

const connectToDatabase = () => {
  const dbUri = process.env.MONGODB_URI;

  mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

  const db = mongoose.connection;
  db.on('error', (error) => console.error('MongoDB connection error:', error));
  db.once('open', () => console.log('Connected to MongoDB'));
};

module.exports = { connectToDatabase };
