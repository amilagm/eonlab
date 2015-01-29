/**
 * Created by agamlath on 1/27/2015.
 */
var Hapi = require('hapi');
var routes = require('./routes');
// Create a server with a host and port
var server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

server.route(routes);
// Start the server
server.start();
