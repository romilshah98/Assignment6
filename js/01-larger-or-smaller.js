var int1, int2;
int1 = parseInt(window.prompt("Enter First Number"));
int2 = parseInt(window.prompt("Enter Second Number"));
if (int1 > int2) {
    window.document.write("The Largest Number is " + int1);
}
else if (int1 < int2) {
    window.document.write("The Largest Number is " + int2);
}
else{
    window.document.write("Both the numbers are equal ");
}