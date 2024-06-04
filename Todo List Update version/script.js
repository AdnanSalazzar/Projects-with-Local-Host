const dateSpan = document.querySelector("#date");
const itemInput = document.querySelector("#item");
const enterButton = document.querySelector("#enter");
const toDoList = document.querySelector(".to-do-list");

const itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

console.log(itemsArray);

function displayDate() {
  let date = new Date();
  date = date.toString().split(" ");
  dateSpan.innerHTML = `${date[1]} ${date[2]} ${date[3]}`;
}

enterButton.addEventListener("click", () => {
  const item = itemInput.value.trim();
  if (item) {
    createItem(item);
    itemInput.value = "";
  }
});

function displayItems() {
  let items = "";

  for (const item of itemsArray) {
    items += `<div class="list">
                <div class="input-controller">
                <textarea disabled>${item}</textarea>
                <div class="edit-controller">
                    <i class="fa fa-pen-to-square edit-button"></i>
                    <i class="fa fa-trash delete-button"></i>
                </div>
                </div>
                <div class="update-controller" style="display: none;">
                <button class="save-button">Save</button>
                <button class="cancel-button">Cancel</button>
                </div>
            </div>`;
  }

  toDoList.innerHTML = items;
}

toDoList.addEventListener("click", (e) => {
  const target = e.target;

  if (target.classList.contains("delete-button")) {
    const itemDiv = target.closest(".list");
    const itemText = itemDiv.querySelector("textarea").value.trim();

    const index = itemsArray.indexOf(itemText);
    if (index > -1) {
      itemsArray.splice(index, 1);
    }

    localStorage.setItem("items", JSON.stringify(itemsArray));

    itemDiv.remove();
  }

  if (target.classList.contains("edit-button")) {
    const itemDiv = target.closest(".list");
    const textarea = itemDiv.querySelector("textarea");
    const updateController = itemDiv.querySelector(".update-controller");

    textarea.disabled = false;
    textarea.dataset.oldValue = textarea.value.trim();
    updateController.style.display = "block";
  }

  if (target.classList.contains("save-button")) {
    const itemDiv = target.closest(".list");
    const textarea = itemDiv.querySelector("textarea");
    const newText = textarea.value.trim();

    const index = itemsArray.indexOf(textarea.dataset.oldValue);
    if (index > -1) {
      itemsArray[index] = newText;
    }

    localStorage.setItem("items", JSON.stringify(itemsArray));

    textarea.disabled = true;
    itemDiv.querySelector(".update-controller").style.display = "none";
  }

  if (target.classList.contains("cancel-button")) {
    const itemDiv = target.closest(".list");
    const textarea = itemDiv.querySelector("textarea");

    textarea.value = textarea.dataset.oldValue;
    textarea.disabled = true;
    itemDiv.querySelector(".update-controller").style.display = "none";
  }
});

function createItem(item) {
  itemsArray.push(item);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  displayItems(); // Update the display without reloading
}

window.onload = function () {
  displayDate();
  displayItems();
};
