const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();


const port = 5000;

//displayPlayerPage,
 const {displayPlayerPage,loginPage} = require('./routes/login');
 const {homePage,welcome,aboutPage} = require('./routes/home');
const {bookingPage,newBooking,editBookingPage,editBooking} = require('./routes/booking');
const {adminPage,assignPlayer,billPage} = require('./routes/admin');



// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'socka'
});

// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;

// configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload

// routes for the app
app.get('/', welcome);
app.get('/admin', adminPage);
app.get('/about', aboutPage);
app.get('/home', homePage);
app.get('/login', loginPage);
app.get('/booking', bookingPage);
app.get('/bill/:id', billPage);
app.get('/login', displayPlayerPage);
app.get('/editBooking/:id',editBookingPage);
app.post('/login', displayPlayerPage);
app.post('/editBooking/:id',editBooking);
//app.post('/applyEmp', displayPlayerPage);
//app.post('/admin', admin);
app.post('/applyEmp/:first_name', assignPlayer);
//app.get('/applyEmp', assignPlayer);
app.post('/makeBooking',newBooking);



// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
