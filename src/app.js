const express = require('express');
const cors = require('cors');
const callRoutes = require('./routes/callRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/calls', callRoutes);

module.exports = app;
