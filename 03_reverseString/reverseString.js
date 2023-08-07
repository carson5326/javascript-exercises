const reverseString = function(word) {
    let letters = word.split('');
    let final = '';
    for (let i = letters.length - 1; i >= 0; i--) {
        final += letters[i];
    }
    return final;
};

// Do not edit below this line
module.exports = reverseString;
