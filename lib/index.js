import robot from 'robotjs';
import { GlobalKeyboardListener } from 'node-global-key-listener';
import { CONFIG } from '../bin/index.js';

const v = new GlobalKeyboardListener();

let interval;

v.addListener((e) => {
	switch (e.name.toLowerCase()) {
		case CONFIG.startKey:
		case CONFIG.restartKey: {
			if (!interval) {
				interval = setInterval(
					() => robot.mouseClick(CONFIG.mouseButton, true),
					CONFIG.millisecondsDelay,
				);
			}
			break;
		}

		case CONFIG.pauseKey: {
			if (interval) {
				clearInterval(interval);
				interval = null;
			}
			break;
		}

		case CONFIG.stopKey: {
			if (interval) {
				clearInterval(interval);
				interval = null;
			}
			process.exit();
			break;
		}

		default:
			break;
	}
});
