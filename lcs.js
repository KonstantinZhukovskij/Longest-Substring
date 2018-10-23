function findLargestSubstring(arr) {
    let value = "";
    if (arr.length) {
        let length = arr[0].length;
        outer: for (let index = length; index > 0; index--) {
            for (let j = 0; j <= length - index; j++) {
                let temp = arr[0].substr(j, index);
                if (arr.every(function (word) {
                    return word.includes(temp);
                })) {
                    value = temp;
                    break outer;
                }
            }
        }
    }
    return value;
}

var sourceArray = process.argv.length > 2 ? process.argv.slice(2) : [];
console.log(findLargestSubstring(sourceArray));