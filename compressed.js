function f(arr) {
    let v = "";
    if (arr.length) {
        let l = arr[0].length;
        o: for (let i = l; i > 0; i--) {
            for (let j = 0; j <= l - i; j++) {
                let t = arr[0].substr(j, i);
                if (arr.every(function (w) {
                    return w.includes(t);
                })) {
                    v = t;
                    break o;
                }
            }
        }
    }
    return v;
}

var s = process.argv.length > 2 ? process.argv.slice(2) : [];
console.log(f(s));