var romanToInt = function (s) {
	let num = 0,
		len = s.length;

	for (let i = 0; i < len; i++) {
		if (s[i] == 'M') num += 1000;
		else if (s[i] == 'D') num += 500;
		else if (s[i] == 'L') num += 50;
		else if (s[i] == 'V') num += 5;
		else if (s[i] == 'C' && i != len - 1 && s[i + 1] == 'D') {
			num += 400;
			++i;
		} else if (s[i] == 'C' && i != len - 1 && s[i + 1] == 'M') {
			num += 900;
			++i;
		} else if (s[i] == 'X' && i != len - 1 && s[i + 1] == 'L') {
			num += 40;
			++i;
		} else if (s[i] == 'X' && i != len - 1 && s[i + 1] == 'C') {
			num += 90;
			++i;
		} else if (s[i] == 'I' && i != len - 1 && s[i + 1] == 'X') {
			num += 9;
			++i;
		} else if (s[i] == 'I' && i != len - 1 && s[i + 1] == 'V') {
			num += 4;
			++i;
		} else if (s[i] == 'C') num += 100;
		else if (s[i] == 'X') num += 10;
		else if (s[i] == 'I') num += 1;
	}

	return num;
};
