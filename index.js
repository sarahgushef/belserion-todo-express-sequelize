require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CREATE CONNECTION TO DATABASE
const sequelize = require('./config');

// Testing the Connection
sequelize
  .authenticate()
  .then(() => console.log(`Connected to database`))
  .catch(error => {
    throw error;
  });

// ROUTES
app.get('/', (req, res) => res.send('Hello world'));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
