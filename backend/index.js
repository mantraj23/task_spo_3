
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./dbConnect.js');
const cors = require('cors') ;
const routes = require('./routes.js');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());

// connecting dataB

connectDB() ;

app.use('/user',routes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
