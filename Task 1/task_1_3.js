function Sum(arr, k) {

    for (let i = 0; i < arr.length - 1; i++) {
        for (let l = i + 1; l < arr.length; l++) {
            if ((arr[i] + arr[l]) == k) {
                return (arr[i] + ' + ' + arr[l] + ' = ' + k);
            }
        }
    }
}

console.log(Sum([10, 15, 3, 7], 17))