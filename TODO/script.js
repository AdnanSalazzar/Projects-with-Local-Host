// 1  First pick the elements
const form = document.querySelector("#new-item-form");
const list = document.querySelector("#list");
const input = document.querySelector("#item-input");

// 2  When I in the form then what ?
console.log("hi");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // 1. Create a new item
  const item = document.createElement("div");
  console.log(input.value);
  item.innerText = input.value;
  item.classList.add("list-item");
  console.log(item);


  // 2. Add that item  to list
  list.appendChild(item);
  // 3. Clear input
  input.value = "";

  // 4. Setup even listener to delete that item
  item.addEventListener("click", () => {
    list.removeChild(item);
  });
});


// if u wanted to move it outside 
/* list.addEventListener("click", (e) => {
  if (e.target.classList.contains("list-item")) {
    list.removeChild(e.target);
  }
}); */