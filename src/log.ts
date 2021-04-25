import chalk from 'chalk';

export function good(x: string): string {
	const current_time = strftime('%H:%M:%S');
	console.log(`[👍][${current_time}] ${chalk.green(x)}`);
	return `[👍][${current_time}] ${chalk.green(x)}`;
}
export function danger(x: string): string {
	const current_time = strftime('%H:%M:%S');
	console.log(`[👍][${current_time}] ${chalk.red(x)}`);
	return `[👍][${current_time}] ${chalk.red(x)}`;
}
export function warning(x: string): string {
	const current_time = strftime('%H:%M:%S');
	console.log(`[👍][${current_time}] ${chalk.yellow(x)}`);
	return `[👍][${current_time}] ${chalk.yellow(x)}`;
}
export function info(x: string): string {
	const current_time = strftime('%H:%M:%S');
	console.log(`[👍][${current_time}] ${chalk.blue(x)}`);
	return `[👍][${current_time}] ${chalk.blue(x)}`;
}

function strftime(sFormat: string) {
	// if (!(date instanceof Date)) date = new Date();
	let date = new Date();
	var nDay = date.getDay(),
		nDate = date.getDate(),
		nMonth = date.getMonth(),
		nYear = date.getFullYear(),
		nHour = date.getHours(),
		aDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		aMonths = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		],
		aDayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
		isLeapYear = function () {
			if ((nYear & 3) !== 0) return false;
			return nYear % 100 !== 0 || nYear % 400 === 0;
		},
		getThursday = function () {
			var target = new Date(date);
			target.setDate(nDate - ((nDay + 6) % 7) + 3);
			return target;
		},
		zeroPad = function (nNum: number, nPad: number) {
			return ('' + (Math.pow(10, nPad) + nNum)).slice(1);
		};
	return sFormat.replace(/%[a-z]/gi, function (sMatch) {
		return (
			{
				'%H': zeroPad(nHour, 2),
				'%M': zeroPad(date.getMinutes(), 2),
				'%S': zeroPad(date.getSeconds(), 2),
			}[sMatch] || sMatch
		);
	});
}
