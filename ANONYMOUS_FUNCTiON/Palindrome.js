var palind = function (a) {
    var res = "";
    var i;
    var ans = "";
    for (i = 0; i < a.length; i++) {
        res += a[i];
        var count = 0

        for (var j = 0; j < res.length; j++) {
            if (res[j] === res[((res.length - 1) - j)]) {
                count++

            }
        }
        if (count === res.length) {
            ans += res + " "
        }
        res = "";
    }
    return ans;

}
console.log(palind([1, 11, 343, 200, 798, 80108, 8008, 999, 7171, 700007]));