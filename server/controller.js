const fs = require('fs');
const path = require('path');
const CONTROLLER_DIR = path.resolve(__dirname, './controller');

function addMapping(router, mapping) {
	let pathname = '', method = '', param = null;
	for (let key in mapping) {
		[method, pathname] = key.split(/\s+/);
		param = Array.prototype.concat(pathname, mapping[key]);
		router[method].apply(router, param);
	}
}

function addControllers(router, dir) {
	let files = fs.readdirSync(dir);
	let jsFiles = files.filter(f => f.endsWith('.js'));
	let mapping = null;

	jsFiles.forEach(f => {
		console.log(`processing controller: ${f}...`);
		mapping = require(path.resolve(CONTROLLER_DIR, f));
		addMapping(router, mapping);
	});
}

module.exports = function (router, dir) {
	let controllersDir = dir || CONTROLLER_DIR;
	addControllers(router, controllersDir);
	return router.routes();
};
