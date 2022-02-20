function RLE(str) {
    var text = '';
    let sum = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i + 1]) {
            sum++;
        } else {
            text += (sum != 1 ? sum : '') + str[i];
            sum = 1;
        }
    }
    return text;

}

console.log(RLE('AABBBCCCCCAADDDD'));