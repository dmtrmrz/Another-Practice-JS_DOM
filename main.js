const form = document.getElementById("addForm");
const itemList = document.getElementById("items");
const filter = document.getElementById("filter");

// Form Submit Event

form.addEventListener("submit", addItem);

// Delete event
itemList.addEventListener("click", removeItem);

//Filter Event
filter.addEventListener("keyup", filterItems);

// Add item
function addItem(e) {
  e.preventDefault();
  //  get input value
  const newItem = document.getElementById("item").value;

  // Create new li element

  const li = document.createElement("li");

  //Add class
  li.className = "list-group-item";
  // add text node w/ input value

  li.appendChild(document.createTextNode(newItem));

  itemList.appendChild(li);

  // Crate del btn elem
  const deleteButton = document.createElement("button");
  deleteButton.className = "btn btn-danger btn-sm float-right delete";
  deleteButton.appendChild(document.createTextNode("X"));

  //Appen btn to li
  li.appendChild(deleteButton);

  // Append li to list

  itemList.appendChild(li);
  //   console.log(li);
}

// Remove Item

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems(e) {
  // convert text to LC

  let text = e.target.value.toLowerCase();
  // Get li
  let items = itemList.getElementsByTagName("li");
  // convert to an array
  Array.from(items).forEach(function (item) {
    let itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
