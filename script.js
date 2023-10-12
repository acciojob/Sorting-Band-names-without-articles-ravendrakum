//your code here

let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

// Function to remove articles from a string
function removeArticles(str) {
  return str.replace(/^(a |an |the )/i, ''); // This regex removes articles at the beginning of the string
}

// Sort the touristSpots array in place without articles
touristSpots.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Get the ul element with the 'band' id from your HTML
const bandList = document.getElementById('band');

// Create and append li elements to the ul element
touristSpots.forEach((spot) => {
  const listItem = document.createElement('li');
  listItem.textContent = spot;
  bandList.appendChild(listItem);
});