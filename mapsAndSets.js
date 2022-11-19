//Has Duplicate
const hasDuplicate = arr => new Set(arr).size !== arr.length;

//Vowel Count
function vowels(char) {
    return 'aeiou'.includes(char);
}

function vowelCount(str) {
    const vowelsMap = new Map();
    for (let char of str) {
        let lowerCaseChar = char.toLowerCase()
        if (vowels(lowerCaseChar)) {
            if (vowelsMap.has(lowerCaseChar)) {
                vowelsMap.set(lowerCaseChar, vowelsMap.get(lowerCaseChar) + 1);
            } else {
                vowelsMap.set(lowerCaseChar, 1);
            }
        }
    }
    return vowelsMap;
}