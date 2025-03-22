// Step 1: Remove the <main> element with id 'main'
const main = document.getElementById("main");
if (main) {
  main.remove();
}

// Step 2: Create a new <h1> element
const newHeader = document.createElement("h1");

// Step 3: Set the id of the new <h1> to 'victory'
newHeader.id = "victory";

// Step 4: Set the text inside the <h1> to "[Your Name] is the champion"
newHeader.textContent = "John Doe is the champion"; // Replace "John Doe" with your actual name

// Step 5: Append the new <h1> to the document body
document.body.appendChild(newHeader);
