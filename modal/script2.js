/*
  TODO: 2. Select the elements with the following IDs
    * modal
    * open-modal-btn
    * close-modal-btn
    * BONUS: overlay
*/

const openModal = document.querySelector("#open-modal-btn");
const overlay = document.querySelector("#overlay");
const modal = document.querySelector("#modal");
const closeModal = document.querySelector("#close-modal-btn");

// TODO: 3. Create a click event listener for the open-modal-btn that adds the class "open" to the modal
// BONUS: Also add the class "open" to the overlay

openModal.addEventListener("click", () => toggleOpenClass());

// TODO: 4. Create a click event listener for the close-modal-btn that removes the class "open" from the modal
// BONUS: Also remove the class "open" from the overlay
closeModal.addEventListener("click", () => toggleOpenClass());

function toggleOpenClass() {
  modal.classList.toggle("open");
  overlay.classList.toggle("open");
}

// BONUS: Add a click event listener to the overlay that removes the class "open" from the modal and the overlay
