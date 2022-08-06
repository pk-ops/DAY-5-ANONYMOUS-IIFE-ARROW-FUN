const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const odd = (array) => {

    var i;
    var res = "";
    for (i = 0; i < array.length - 1; i++) {

        if (array[i] % 2 !== 0) {

            res += array[i] + " ";
        }
    }
    return res;
}

console.log(odd(array));