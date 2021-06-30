//EXPRESS MIDDLEWARE BASICS BETWEEN NODE.JS & CLIENT
//app.METHOD(PATH, HANDLER)

//Where:
//app is an instance of express.
//METHOD is an HTTP request method, in lowercase.
//PATH/ENDPOINT is a path on the server.
//HANDLER is the function executed when the route is matched.

//EXAMPLE:
//app.get('/', function (req, res) {
//    res.send('Hello World!')
//  })

const express = require('express'); // EXPRESS**
const app = express(); // EXPRESS**

const port = process.env.PORT || 3011


mongoose = require('mongoose');

// ======== DEFINING ROUTES ========//

usersRoute = require('./routes/usersRoute');
plantsRoute = require('./routes/plantsRoute');
booksRoute = require('./routes/booksRoute');
videosRoute = require('./routes/videosRoute')
bodyParser = require('body-parser');

// =================== initial settings ===================

app.use(bodyParser.urlencoded({ extended: true })); // EXPRESS
app.use(bodyParser.json()); // EXPRESS

// ===== MONGOOSE ===== //
async function connecting() {
    try {
        await mongoose.connect(`mongodb://127.0.0.1/newdatabase`, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log('Connected to the DB')
    } catch (error) {
        console.log('ERROR: Seems like your DB is not running, please start it up !!!', error.message);
    }
}
connecting()
//temp stuff to suppress internal warning of mongoose which would be updated by them soon
mongoose.set('useCreateIndex', true);
//end of connecting to mongo and checking if DB is running

//  EXPRESS routes: "use" to reach a js file
app.use('/users', usersRoute);
app.use('/plants', plantsRoute);
app.use('/books', booksRoute);
app.use('/videos', videosRoute);

// Set the server to listen on port 3010
app.listen(port, () => console.log(`listening on port `, port))  // EXPRESS**