const sumAll = function(start, end) {
    let final = 0;
    if (!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR"
    if (start < 0 || end < 0) return "ERROR"
    if (start < end) {
        for (;start <= end; start++) {
            final += start;
        }
    }
    else {
        for (;end <= start; end++) {
            final += end;
        }
    }
    return final;
};

// Do not edit below this line
module.exports = sumAll;
