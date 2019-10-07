var i = 1;
var j;
for (i; i <= 7; i += 1) {
    var output = "";
    for (j = 1; j <= i; j += 1) {
        output += "#";
    }
    window.console.log(output);
}