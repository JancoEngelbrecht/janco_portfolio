const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv/config'); 

const app = express();

// Set up body parser middleware
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Set up CORS options
const corsOptions = {
    origin: process.env.URL, 
    credentials: true,
    optionSuccessStatus: 200
};

// Use CORS middleware
app.use(cors(corsOptions));

// Welcome message at root ("/") route
app.get('/', (req,res) => {
    res.send('Welcome to Janco server!');
});

// Use the main router index
const routes = require('./routes'); 
app.use('/', routes);


// Start the server
const port = process.env.PORT || 4000; 
const server = app.listen(port, () => {
    console.log(`Server is running on ${port}`);
}); 

