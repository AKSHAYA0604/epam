// Define an array with sample values
const numbers = [5, 12, 8, 130, 44, 3, 20, 55];

// Display the original array on the webpage
document.getElementById("originalArray").textContent = numbers.join(", ");

// Function to filter numbers greater than 10
function filterNumbers() {
    let filtered = numbers.filter(num => num > 10);

    // Display the filtered array on the webpage
    document.getElementById("filteredArray").textContent = filtered.join(", ");
}
