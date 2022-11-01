function birthday(s, d, m) {
    // Write your code here
    let ways = 0;
    if (m === 1) {
        for (let i = 0; i < s.length; i += 1) {
            if (s[i] === d) ways += 1;
        }
    } else if (m != s.length) {
            let segLength = m;
        for (let segs = 0; segs < s.length; segs += 1) {
            let seg = [];
            for (let i = 0; i < segLength; i ++) {
                seg.push(s[segs + i])
            }
            let sum = 0;
            for(let i = 0; i < segLength; i++) sum += seg[i];
            if(sum === d) ways += 1;
        }
    } else if (m === s.length){
        let sum = 0;
            for(let i = 0; i < s.length; i++) sum += s[i];
            if(sum === d) ways += 1;
    }
    return ways;
}

console.log(birthday([1, 1, 1, 1, 1, 1], 3, 2))
