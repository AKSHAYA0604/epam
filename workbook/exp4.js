function checkEvenOdd() {
    let num = document.getElementById("number").value;
    let resultElement = document.getElementById("result");

    if (num === "") {
        resultElement.innerText = "Please enter a number.";
        return;
    }

    num = parseInt(num);
    if (isNaN(num)) {
        resultElement.innerText = "Invalid input. Please enter a valid number.";
        return;
    }

    if (num % 2 === 0) {
        resultElement.innerText = `${num} is an Even number.`;
    } else {
        resultElement.innerText = `${num} is an Odd number.`;
    }
}
