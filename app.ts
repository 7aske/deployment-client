import * as program from 'commander';
import Axios from 'axios';
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

//const serverUrl = 'http://deployment-a7aske.c9users.io';
const serverUrl = 'http://localhost:3000';
program
	.version('0.1.0')
	.command('deploy <repo>')
	.action(repo => {
		execute({
			path: 'deploy',
			data: {
				repository: repo
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
	.command('remove [repo]')
	.action(repo => {
		execute({
			path: 'remove',
			data: {
				query: repo
			}
		});
	});
function execute(payload) {
	Axios({
		method: 'post',
		url: `${serverUrl}/${payload.path}`,
		data: payload.data
	})
		.then(function(response) {
			console.log(response.data);
		})
		.catch(err => console.log(err));
}
program.parse(process.argv);
