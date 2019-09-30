var coinFlip;
var i = 0;
for (i; i < 10; i += 1) {
    coinFlip = Math.round(Math.random());
    if (coinFlip === 0) {
        window.console.log("Heads");
    }
    else {
        window.console.log("Tails");
    }
}
