require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello world'));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
