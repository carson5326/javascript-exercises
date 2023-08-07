const removeFromArray = function(values,...valuesToRemove) {
    let final = [];
    values.forEach((element) => {
        if (!valuesToRemove.includes(element)) {
            final.push(element);
        }
    })
    return final;
};

// Do not edit below this line
module.exports = removeFromArray;
