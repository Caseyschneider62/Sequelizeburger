var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();
//app.use(express.static(__dirname + '/public'));

var PORT = process.env.PORT || 8090;

var db = require("./models");

app.use(bodyParser.urlencoded({extended: false}));
 
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

db.sequelize.sync({ force: true }).then(function() {
app.listen(PORT, function() {
  console.log("Listening at %s", PORT);
});
});