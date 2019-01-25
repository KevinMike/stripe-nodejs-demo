const app = require("express")();
const path = require('path');
const bodyParser = require('body-parser');
const api_routes = require('./routes');
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'pug');

app.get("/", ((req, res) => {
    res.render("index", {keyPublishable: process.env.keyPublishable});
}));

app.use('/api',api_routes);

app.listen(3000, () => {
    console.log(`App is running at: http://localhost:3000/`);
});