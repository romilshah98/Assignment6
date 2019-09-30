var i = 1;
for (i; i <= 100; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
        window.document.write("Marco! Polo!"+ "<br>");
    }
    else if (i%3===0) {
        window.document.write("Marco!"+ "<br>");
    }
    else if (i%5===0) {
        window.document.write("Polo!"+ "<br>");
    }
}