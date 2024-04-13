// Tab title
process.stdout.write('\x1B]0;Autoclicker\x07');

// Keys instructions
process.stdout.write('Press `S` to start\n');
process.stdout.write('Press `P` to pause\n');
process.stdout.write('Press `R` to restart\n');
process.stdout.write('Press `Q` to quit\n');

// Hide typed keys
process.stdin.setRawMode(true);

export const CONFIG = {
	startKey: 's',
	pauseKey: 'p',
	stopKey: 'q',
	restartKey: 'r',
	mouseButton: 'left',
	isCtrlActive: false,
	millisecondsDelay: 500,
};
