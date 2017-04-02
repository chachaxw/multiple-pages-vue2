#!/usr/bin/env node
const Koa = require('koa');
const argv = require('yargs').argv;
const controller = require('./controller');
const router = require('koa-router')();
const cors = require('./middleware/cors');

const port = parseInt(argv.port, 10) || parseInt(argv.p, 10) || 8080;
const host = argv.host || argv.h || 'localhost';

const app = new Koa();

app.use(cors());

app.use(controller(router));

app.on('error', (err, ctx) => {
	console.log('GLOBAL-ERROR:');
	console.log(err);
});

app.listen(port, host);

console.log(`Mock server is running on: ${host}:${port}`);
