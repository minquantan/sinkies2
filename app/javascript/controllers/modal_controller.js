import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    // this.element.textContent = "Hello World!"
    // console.log("works or no?")
    console.log("---------------------------------Hello, Stimulus!--------------------------------")
  }

  popup(event) {

    // get the overlay
    const overlay = document.getElementById("overlay")

    // only perform the action if the overlay is not active
    if (overlay.classList.contains("dormant")) {
      // get the details of the selected menu item
      const cardInfo = this.element.querySelector(".invisible").innerHTML;
      console.log(cardInfo);

      // get the div that the menu item info will be inserted into
      const selectedItem = document.getElementById("selected-item");

      // insert the content into popup
      selectedItem.insertAdjacentHTML("afterbegin", cardInfo);
      // selectedItem.innerHTML = cardInfo;
    }

    overlay.classList.remove("dormant");
    overlay.classList.add("active");

  }

  popdown() {
  //de-activate overlay
  const overlay = document.getElementById("overlay")
  overlay.classList.remove("active");
  overlay.classList.add("dormant");

  // remove content from the menu item popup
  const selectedItem = document.getElementById("selected-item");
  selectedItem.innerHTML = '';

  // remove invisible class from gridbox
  document.querySelector(".gridbox").classList.remove("invisible");
  }
}
