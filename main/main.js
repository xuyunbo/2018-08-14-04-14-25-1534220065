module.exports = function main(num) {
    var numbers = {
        0: ['._.', '|.|', '|_|'],
        1: ['...', '..|', '..|'],
        2: ['._.', '._|', '|_.'],
        3: ['._.', '._|', '._|'],
        4: ['...', '|_|', '..|'],
        5: ['._.', '|_.', '._|'],
        6: ['._.', '|_.', '|_|'],
        7: ['._.', '..|', '..|'],
        8: ['._.', '|_|', '|_|'],
        9: ['._.', '|_|', '..|']
    };
    var result = [];
    var led = '';

    var len1 = num.length;
    for (var i = 0; i < len1; i++) {
        result.push(numbers[num[i]]);
    }
    var len2 = result.length;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < len2; j++) {
            led += result[j][i];
            if (j != len2 - 1) {
                led += ' ';
            } else if (j == len2 - 1) {
                led += '\n';
            }
        }
    }
    console.log(led);
    return led;
};
