export default {
	repository: 'https://github.com/betterwrite/betterwrite-black',
	silent: false,
	commits: 'conventional-commits',
	tag: true,
	version: true,
	push: true,
	publish: false,
	release: true,
	exclude: [' typo', 'refactor:', 'refactor!:'],
	prerelease: 'alpha',
	packagePath: 'package.json',
	lernaPath: 'lerna.json',
};
