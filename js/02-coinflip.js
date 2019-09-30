var coinFlip;
coinFlip=Math.random();
console.log(coinFlip);

var choice;
choice=window.prompt("Choose: Heads or Tails");
var result;
if (coinFlip<=0.5){
    result="Heads"
}
else{
    result="Tails"
}
if (result=="Heads" && choice=="Heads"){
    window.alert("The flip was heads and you chose heads...you win!");
}

else if (result=="Heads" && choice=="Tails"){
    window.alert("The flip was heads and you chose tails...you lose!");
}

else if (result=="Tails" && choice=="Heads"){
    window.alert("The flip was tails and you chose heads...you lose!");
}

else{
    window.alert("The flip was tails and you chose tails...you win!");
}