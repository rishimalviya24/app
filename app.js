const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const User = require('./models/user.model'); // Import the user model

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/register', (req, res) => {
    res.render('index');
});

app.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 8);

        // Save the user to the database
        const newUser = new User({
            email: email,
            password: hashedPassword,
        });

        await newUser.save();

        // Create a JWT token
        const token = jwt.sign({ email }, 'secret');

        // Set the token in a cookie
        res.cookie('token', token);

        res.send("User created and logged in successfully!");
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send("Internal Server Error");
    }
});

app.get('/login', ( req,res) => {
    res.send("hello");
})

app.post('/login', (req, res) => {
    let user = {username , password} = req.body;
    userModel.findOne({username})
        if(!user)console.log(err);
        

    
})

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
