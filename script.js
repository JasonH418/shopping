const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");

const createButton = (classes) => {
  const button = document.createElement("button");
  button.className = classes;
  return button;
};

const createIcon = (classes) => {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
};

const addItem = (e) => {
  e.preventDefault();
  const newItem = itemInput.value;
  // Validate Input
  if (newItem === "") {
    alert("Please Enter An Item");
    return;
  }
  // Create List Item
  const li = document.createElement("li"); // Li tag maken
  li.appendChild(document.createTextNode(newItem)); // Text toevoegen

  const button = createButton("remove-item btn-link text-red"); // knop maken met classes
  const icon = createIcon("fa-solid fa-xmark"); // icon maken met classes

  button.appendChild(icon); // icon toevoegen als kind aan knop
  li.appendChild(button); // knop toevoegen als kind aan li

  itemList.appendChild(li); // li toevoegen aan lijst
  itemInput = ""; // Placeholer leeg maken
};

itemForm.addEventListener("submit", addItem); // als er gesubmit word via '+Add Item', voer addItem-functie uit
