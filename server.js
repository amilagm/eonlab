/**
 * Created by agamlath on 1/27/2015.
 */
var Hapi = require('hapi');
var mongoose = require('mongoose');                     // mongoose for mongodb
var routes = require('./app/routes');
var database = require('./config/database');
var Users = require('./app/Models/User');

var usr = new Users();

//mongoose.connect(database.url);     // connect to mongoDB database on modulus.
// Create a server with a host and port
var server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

server.route(routes);
// Start the server
server.start();
