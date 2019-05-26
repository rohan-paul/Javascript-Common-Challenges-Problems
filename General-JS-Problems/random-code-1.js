n_th_fibonacci = n => {
    let [a, b] = [0, 1];

    while (--n) {
        [a, b] = [b, b + a ]
    }
    return b;
}

console.log(n_th_fibonacci(10000)) // => 55