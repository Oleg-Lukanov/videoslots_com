const Array = [0, 24, 6, 4, 0, 3];
console.log(multiplier(Array));

function multiplier(Array) {
    let count = 0;

    for (const char of Array) {
        if (char !== 0 && (char % 4 === 0 || char % 6 === 0)) {
            count++;
        }
    }

    return count;
}
