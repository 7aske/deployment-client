const program = require('commander');
const axios = require('axios');
const bodyParser = require('body-parser');
// program
// 	.version('0.1.0')
// 	.option('-d, --deploy <repo>', 'Deploy')
// 	.option('-k --kill <sring>', 'Kill')
// 	.option('-u, --update <string>', 'Update')
// 	.option('-r, --run <string>', 'Run')
// 	.option('-f, --find <string>', 'Find')
// 	.parse(process.argv);

// if (program.deploy) console.log(' int: %j', program.integer);
// if (program.kill) console.log('kill');
// if (program.update) console.log('update');
// if (program.run) console.log('run');
// if (program.find) console.log('find');

program
	.version('0.1.0')
	.command('deploy <repo>')
	.action(repo => {
		if (repo) deploy(repo);
		else console.log('Invalid repository');
	});
program
	.version('0.1.0')
	.command('kill <name>')
	.action(name => {
		if (name) kill(name);
		else console.log('Invalid name');
	});
program
	.version('0.1.0')
	.command('update <name>')
	.action(name => {
		if (name) update(name);
		else console.log('Invalid name');
	});

program
	.version('0.1.0')
	.command('run <name>')
	.action(name => {
		if (name) run(name);
		else console.log('Invalid name');
	});
program
	.version('0.1.0')
	.command('find <name>')
	.action(name => {
		if (name) find(name);
		else console.log('Invalid name');
	});

async function deploy(repo) {
	console.log(name);
	await axios
		.post('http://localhost:3000/deploy', {
			repository: repo
		})
		.then(function(response) {
			console.log(response.data);
		})
		.catch(function(error) {
			console.log(error);
		});
}
async function kill(name) {
	console.log(name);
	await axios
		.post('http://localhost:3000/kill', {
			query: name
		})
		.then(function(response) {
			console.log(response.data);
		})
		.catch(function(error) {
			console.log(error);
		});
}
async function update(name) {
	console.log(name);
	await axios
		.post('http://localhost:3000/update', {
			query: name
		})
		.then(function(response) {
			console.log(response.data);
		})
		.catch(function(error) {
			console.log(error);
		});
}
async function run(name) {
	console.log(name);
	await axios
		.post('http://localhost:3000/run', {
			query: name
		})
		.then(function(response) {
			console.log(response.data);
		})
		.catch(function(error) {
			console.log(error);
		});
}
async function find(name) {
	console.log(name);
	await axios
		.post('http://localhost:3000/find', {
			query: name
		})
		.then(function(response) {
			console.log(response.data);
		})
		.catch(function(error) {
			console.log(error);
		});
}
program.parse(process.argv);
