require('dotenv').config();

const express          = require('express'),
    app              = express(),
    path             = require('path'),
    port             = process.env.PORT || 8080,
    mongoose         = require('mongoose'),
    expressLayouts   = require('express-ejs-layouts'),
    bodyParser       = require('body-parser');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(require('./app/routes'));

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connection to mLab succesful');
    app.listen(port, () => {
        console.log(`App is listening on ${port}`);
})
});