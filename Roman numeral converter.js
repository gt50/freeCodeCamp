function convert(num) {
    var tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    var ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    return tens[Math.floor(num/10)] + ones[num %10];
}

console.log(convert(36));

/*
I=1
V=5
X=10
L=50
C=100
D=500
M=1000
*/