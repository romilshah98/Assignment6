var i = 1;
var j = 1;
var output = "";
for (i; i <= 7; i += 1) {
    for (j; j <= i; j += 1) {
        output += "#";
    }
    window.console.log(output);
}