'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const program = require('commander');
const axios_1 = require('axios');
const fs = require('fs');
const path = require('path');
const configFile = path.join(process.cwd(), 'config/config.json');
program
	.version('0.1.0')
	.command('server [server]')
	.option('-p, --port [port]', 'Default port')
	.action((server, options) => {
		updateDefaultServer(server, options.port || 3000);
	});
program
	.version('0.1.0')
	.command('deploy <repo>')
	.action(repo => {
		execute({
			path: 'deploy',
			data: {
				query: repo
			}
		});
	});
program
	.version('0.1.0')
	.command('update [name]')
	.action(name => {
		execute({
			path: 'update',
			data: {
				query: name
			}
		});
	});
program
	.version('0.1.0')
	.command('run [name]')
	.action(name => {
		execute({
			path: 'run',
			data: {
				query: name
			}
		});
	});
program
	.version('0.1.0')
	.command('kill [name]')
	.action(name => {
		execute({
			path: 'kill',
			data: {
				query: name
			}
		});
	});
program
	.version('0.1.0')
	.command('remove [name]')
	.action(name => {
		execute({
			path: 'remove',
			data: {
				query: name
			}
		});
	});
program
	.version('0.1.0')
	.command('find [name]')
	.action(name => {
		execute({
			path: 'find',
			data: {
				query: name
			}
		});
	});
program
	.version('0.1.0')
	.command('clear [name]')
	.action(name => {
		execute({
			path: 'clear',
			data: {
				query: name
			}
		});
	});
program
	.version('0.1.0')
	.command('browse [name]')
	.action(name => {
		execute({
			path: 'browse',
			data: {
				query: name
			}
		});
	});
program
	.version('0.1.0')
	.command('updater')
	.action(name => {
		update();
	});
function execute(payload) {
	const serverUrl = JSON.parse(fs.readFileSync(configFile, 'utf8')).defaultServerUrl;
	console.log('Sending requests to ' + serverUrl);
	axios_1
		.default({
			method: 'post',
			url: `${serverUrl}/${payload.path}`,
			data: payload.data
		})
		.then(function(response) {
			console.log(response.data);
		})
		.catch(err => console.log(err));
}
function update() {
	const wrapper = JSON.parse(fs.readFileSync(configFile, 'utf8')).defaultWrapperUrl;
	console.log('Sending requests to ' + wrapper);
	axios_1
		.default({
			method: 'post',
			url: wrapper
		})
		.then(response => console.log(response.data))
		.catch(err => console.log(err));
}
function updateDefaultServer(inputServer, inputPort) {
	const port = parseInt(inputPort);
	const server = `http://${inputServer}:${inputPort}`;
	const wrapper = `http://${inputServer}:${inputPort - 1}`;
	if (server.length > 0) {
		const oldConfigFile = JSON.parse(fs.readFileSync(configFile, 'utf8'));
		oldConfigFile.defaultServerUrl = server;
		oldConfigFile.defaultWrapperUrl = wrapper;
		fs.writeFileSync(configFile, JSON.stringify(oldConfigFile), 'utf8');
		console.log('Default server set to ' + server);
		console.log('Default wrapper set to ' + wrapper);
	} else {
		throw new Error('Invalid Argument');
	}
}
program.parse(process.argv);
