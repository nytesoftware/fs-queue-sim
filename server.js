'use strict';

const http = require('http');
const crypto = require('crypto');

const express = require('express');
const cookieParser = require('cookie-parser');

const cpus = require('os').cpus();
const cluster = require('cluster');

const app = express();
app.server = http.createServer(app);

const isFastly = !!process.env.FASTLY_WR;

const PORT = 6666;
const WR_COOKIE = isFastly ? 'waiting_room' : 'akavpwr_NYTE';
const PASS_COOKIE = isFastly ? 'waiting_room' : 'akavpau_NYTE';

const getCookie = () =>
	`${Date.now()}~${crypto
		.createHash('md5')
		.update(Math.random().toString(36).slice(2))
		.digest('hex')}`;

if (cluster.isMaster) {
	for (let i = 0; i < cpus.length; i++) {
		cluster.fork();
	}
} else {
	app.disable('x-powered-by');
	app.use(cookieParser());

	app.all('*', (req, res) => {
		const cookies = req.cookies;
		const seed = Math.random();

		console.log(req.originalUrl, cookies);

		if (cookies[PASS_COOKIE]) {
			return res.sendStatus(200);
		}

		if (!cookies[WR_COOKIE]) {
			res.cookie(WR_COOKIE, getCookie());

			return res.sendStatus(503);
		}

		if (seed > 0.9) {
			res.cookie(PASS_COOKIE, getCookie());

			return res.sendStatus(200);
		}

		// console.log(cookies);

		return res.sendStatus(503);
	});

	app.server.listen(process.env.PORT || PORT, () =>
		console.info(`Listening @: ${app.server.address().port}`)
	);
}
