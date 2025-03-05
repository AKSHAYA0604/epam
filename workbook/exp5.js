function calculateProfit() {
    let amount = parseFloat(document.getElementById("amount").value);
    let rate = parseFloat(document.getElementById("rate").value);
    let years = parseInt(document.getElementById("years").value);

    if (isNaN(amount) || isNaN(rate) || isNaN(years) || amount <= 0 || rate <= 0 || years <= 0) {
        document.getElementById("result").innerHTML = "Please enter valid positive values.";
        return;
    }

    let profit = amount * (rate / 100) * years;
    let totalAmount = amount + profit;

    document.getElementById("result").innerHTML = 
        `Profit: ${profit.toFixed(2)}<br>Total Amount after years: ${totalAmount.toFixed(2)}`;
}
