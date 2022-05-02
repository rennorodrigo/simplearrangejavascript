let simpleArrange = function (array, n) {

    let fatorial = function(n) {
        let f = 1;
        for (let i = n; i > 0; i--) {
            f = f * i;
        }
        return f;
    }
    let fatorialN = fatorial(array.length) / fatorial(array.length - n);

    let x = [new Array(n), new Array(n), new Array(n), new Array(n)];

    for (let j = fatorialN, k = array.length, i = 0; i < n; i++, k--) {
        j = j / k;
        x[0][i] = j;
        x[1][i] = j;
        x[2][i] = i;
    }

    let r = new Array(fatorialN);

    for (let p = 0; p < fatorialN; p++) {

        r[p] = new Array(n);

        for (let i = 0; i < n; i++) {

            x[3][i] = x[2][i];

            for (let j = (i - 1); j >= 0; j--) {
                if (x[3][j] === x[2][i]) {
                    x[3][i] = (x[2][i] + 1) % array.length;
                    x[2][i] = (x[2][i] + 1) % array.length;
                    break;
                }
            }
            x[1][i] = x[1][i] - 1;

            if(x[1][i] === 0) {
                x[1][i] = x[0][i];
                x[2][i] = (x[2][i] + 1) % array.length;
            }
            r[p][i] = array[x[3][i]];
        }
    }
    return r;
};

console.log(simpleArrange([1,2,3,4,5,6,7,8], 3));