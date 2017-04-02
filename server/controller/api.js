const bodyParser = require('koa-bodyparser');
const fs = require('fs');
const path = require('path');
const MODEL_DIR = path.resolve(__dirname, '../model');

function genController() {
	let files = fs.readdirSync(MODEL_DIR);
	let dataFiles = files.filter(f => f.endsWith('.js') || f.endsWith('.json'));
	let apiGroup = null;
	let apis = {};

	for (let f in dataFiles) {
		console.log(`Generate apis: ${dataFiles[f]}...`);
		apiGroup = require(path.resolve(MODEL_DIR, dataFiles[f]));
		for (let key in apiGroup) {
			let controller = (function (param) {
				return async (ctx, next) => {
					ctx.body = param;
				};
			})(apiGroup[key]);
			apis[key] = [bodyParser(), controller];
		}
	}
	return apis;
}

module.exports = genController();
