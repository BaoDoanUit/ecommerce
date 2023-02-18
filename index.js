const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const expressValidator = require('express-validator');
//import routes
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')
const catgoryRoutes = require('./routes/category')
const productRoutes = require('./routes/product')
const orderRoutes = require('./routes/order')
const authenticateRoutes = require('./routes/authenticate')
//app
const app = express();

const dbConnection = "mongodb+srv://baodoan:Qn0982190003@cluster0.crgrhba.mongodb.net/?retryWrites=true&w=majority"

//db
mongoose.connect(dbConnection, {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => console.log('DB Connected'));


//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());


//routes middleware

app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', catgoryRoutes);
app.use('/api', productRoutes);
app.use('/api', orderRoutes);

//routes new application
app.use('/api', authenticateRoutes);

const port = 8000

app.listen(port, () => {
    console.log(`Server running on port: ${port} `)
});

