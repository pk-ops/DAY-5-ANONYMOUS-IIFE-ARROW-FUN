const array = [1, 11, 343, 200, 798, 80108, 8008, 999, 7171, 700007];

const palind = (array) => {

    var res = "";
    var i, j;
    var ans = "";
    for (i = 0; i < array.length; i++) {

        res += array[i];
        var count = 0;

        for (j = 0; j < res.length; j++) {
            if (res[j] === res[((res.length - 1) - j)]) {

                count++;
            }
        }

        if (count === res.length) {

            ans += res + " ";
        }

        res = "";
    }

    return ans;
}

console.log(palind(array));