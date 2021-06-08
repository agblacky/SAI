const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '/public')));

app.listen(process.env.PORT || 5000);
console.log('finished with setup');
