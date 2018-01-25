function Letter(ltr) {
	this.char = ltr;
	this.viewChar = (ltr.match(/[a-z]/i)) ? "_" : ltr;
};

module.exports = Letter;