var restify = require('restify');

var server = restify.createServer();

server.head('/api/config', () => {
    let config = {
        name: 'Quique' || process.env.name
    };
    res.send(JSON.stringify(config));
    next();
});

server.get(/.*/, restify.serveStatic({
    directory: __dirname,
    default: 'index.html'
}));

server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});