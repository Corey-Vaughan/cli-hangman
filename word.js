var wordBank = require('./wordBank.js');
var letter = require('./letter.js');

function wordObj() {
    this.realWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    var arr = [];
    for (var i = 0; i < this.realWord.length; i++) {
        arr.push(new letter(this.realWord[i]));
    }
    this.viewWord = arr;
    this.guesses = 9;
    this.guessedLets = "";   
}

wordObj.prototype.guessLet = function(let) {
    var changes = false;
    for (var i = 0; i < this.viewWord.length; i++) {
        if (let.toUpperCase() === this.viewWord[i].realChar.toUpperCase()) {
            this.viewWord[i].viewChar = this.viewWord[i].realChar;
            changes = true;
        }
    }
    return changes;
}

wordObj.prototype.checkWord = function() {
    var currWord = "";
    for (var i = 0; i < this.viewWord.length; i++) {
        currWord += this.viewWord[i].viewChar;
    }
    return (currWord === this.realWord);
}

module.exports = wordObj;

