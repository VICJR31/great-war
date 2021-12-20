const express = require('express');
const app = express();
app.use(requireHTTPS);

function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}

app.use(express.static('./dist/<great-war>'));

app.get('/*', function(req, res) {
    res.sendFile('www/index.html', {root: 'dist/<great-war>/'}
  );
});

app.listen(process.env.PORT || 8080);