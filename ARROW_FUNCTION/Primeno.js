const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const prime = (array) => {

    var i, j;
    var res = "";

    for (i = 0; i < array.length; i++) {
        var count = 0;
        for (j = 1; j <= array[i]; j++) {
            if (array[i] % j === 0) {
                count++
            }
        }
        if (count == 2) {
            res += array[i] + " ";
        }
    }
    return res;

}
console.log(prime(array));