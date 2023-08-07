const repeatString = function(word, count) {
    let final = '';
    if (count < 0) return "ERROR"
    for (let i = 0; i < count; i++) {
        final += word;
    }
    return final;
};

// Do not edit below this line
module.exports = repeatString;
