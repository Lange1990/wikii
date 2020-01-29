var express = require('express')
var sequelize = require("./db")
var router = require("./routes")
var app = express()
var bodyParser = require('body-parser')
var nunjucks = require("nunjucks")
// apuntá nunjucks al directorio conteniendo templates y apagando el cacheo,
// configure devuelve una instancia Enviornment que vamos a querer usar para
// agregar Markdown después.
var env = nunjucks.configure('views', {
    noCache: true
});
var models = require('./models');

// hace res.render funcionar con archivos html
app.set('view engine', 'html');
// cuando res.render funciona con archivos html, haz que use nunjucks para eso.
app.engine('html', nunjucks.render);

app.get("/", function (req, res) {
    res.render("../views/index")
});

// app.listen(1337, function () {
//     console.log('listening on port 1337');
// });

sequelize.sync({})
    .then(function () {
        console.log("Esto esta sincronizado")
        // asegurate de reemplazar el nombre de abajo con tu app de express
        app.listen(3000, function () {
            console.log('Server is listening on port 3000!');
        });
    })
    .catch(console.error);