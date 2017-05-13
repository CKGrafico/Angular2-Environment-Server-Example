var restify = require('restify');

var server = restify.createServer();

server.get('/api/config', (req, res) => {
    let config = {
        name: 'Quique' || process.env.name
    };
    res.send(config);
    next();
});

server.get(/.*/, restify.serveStatic({
    directory: __dirname,
    default: 'index.html'
}));

server.listen(process.env.PORT || 8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});