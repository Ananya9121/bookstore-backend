const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bookStoreRoutes = require('./routes/bookStore.route');

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3001;
const MONGOURL=process.env.MONGOURL || 'mongodb://127.0.0.1:27017/bookstore';
console.log('MONGOURL: ', MONGOURL);
mongoose.connect(MONGOURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Middleware
app.use(bodyParser.json());



app.use('/bookStore', bookStoreRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
