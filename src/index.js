module.exports = function reverse (n) {
    n = Math.abs(n);
    n = n.toString();
    const digits = n.split();
    let result = '';
    const a = n[0];
    const b = n[1];
    const c = n[2];
    if (c == 0) {
        return result = Number(b + a);
    } else {
        return result = Number(c + b + a);
    }
}
