var sum = function (a) {
    var res = 0;
    var i;
    for (i = 0; i < a.length; i++) {
        res += a[i]
    }
    return res;

}
console.log(sum([1, 2, 3, 4, 5]));