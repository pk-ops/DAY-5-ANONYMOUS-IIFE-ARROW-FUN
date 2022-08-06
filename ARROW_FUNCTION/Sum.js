const Array = [1, 2, 3, 4, 5, 6];
const sum = (Array) => {

    var i;
    var res = 0;
    for (i = 0; i < Array.length; i++) {

        res += Array[i];
    }

    return res;
}

console.log(sum(Array));