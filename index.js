const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3011
const mongoose = require('mongoose');

// ======== DEFINING ROUTES ========//

usersRoute = require('./routes/usersRoute');
plantsRoute = require('./routes/plantsRoute');
booksRoute = require('./routes/booksRoute');
videosRoute = require('./routes/videosRoute')
coursesRoute = require('./routes/coursesRoute')
bodyParser = require('body-parser');

// =================== initial settings ===================

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// ===== MONGOOSE connection to the test database on our locally running instance of MongoDB.===== //
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
app.use('/courses', coursesRoute);

// Set the server to listen on port 3010
app.listen(port, () => console.log(`listening on port `, port))

//TODO
//Authorization with JWT
//Upload IMG with multer middleware
//Create DB
//hide password
//
//