//main.js
const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
var mongoose = require("mongoose");

const app = express();



// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// MongoDB Connection

const mongoURI = 'mongodb://127.0.0.1:27017/userManagement';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
  });
  
  const User = mongoose.model('User', userSchema);
  

var db = mongoose.connection;

db.on('error', () => console.log("Error in Connecting to Database"));
db.once('open', () => console.log("Connected to Database"));

// Endpoint for user login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Validate the user credentials here (e.g., check against the database)
    // For simplicity, we'll just print the credentials for now.
    
    console.log('Username:', username);
    console.log('Password:', password);
    res.send('Logged in successfully!');
});

// Endpoint for user registration (insert)
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    // Insert the user into the database here
    // For simplicity, we'll just print the credentials for now.
    console.log('New User:');
    console.log('Username:', username);
    console.log('Password:', password);
    res.send('User registered successfully!');
});

// Endpoint for updating user information (update)
app.put('/update/:id', (req, res) => {
    const userId = req.params.id;
    const { username, password } = req.body;
    // Update user information in the database here
    // For simplicity, we'll just print the updated data for now.
    console.log('User ID:', userId);
    console.log('Updated User:');
    console.log('Username:', username);
    console.log('Password:', password);
    res.send('User information updated successfully!');
});

// Endpoint for deleting a user (delete)
app.delete('/delete/:id', (req, res) => {
    const userId = req.params.id;
    // Delete the user from the database here
    // For simplicity, we'll just print the user ID for now.
    console.log('Deleted User ID:', userId);
    res.send('User deleted successfully!');
});


app.listen(3019);
console.log("Listening on PORT 3019");

  

