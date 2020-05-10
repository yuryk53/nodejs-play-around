const express = require('express');
const router = express.Router();
const artUtils = require('./artUtils');

const sendNotImplemented = (req, res) => res.status(501).send('Not implemented');

router.route('/')
    .get((req, res) => {
        res.end('Use /ascii-art/<name> endpoint to have fun!');
    })
    .all(sendNotImplemented);

router.route('/ascii-art/:name')
    .get(async (req, res) => {
        const name = req.params["name"];
        const art = await artUtils.generateAsciiArt('Hello ' + name);
        res.end(art);
    })
    .all(sendNotImplemented);

express()
    .use(router)
    .listen(80);