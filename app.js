const express = require('express');   
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs')
app.set('views', 'views')
const port = 3000;


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const aboutRoutes = require('./routes/about');

const pageNotFound = require('./controllers/PageNotFound');

app.use(bodyParser.urlencoded({extended: false}));

// This line of code serve a static folder "public" that is available for entire application
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use('/aboutus' , aboutRoutes);

app.use(pageNotFound.pageNotFound);


app.listen(port ,()=>{
    console.log(`App running... http://localhost:${port}`)
})