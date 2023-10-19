import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    // this.element.textContent = "Hello World!"
    // console.log("works or no?")
    console.log("---------------------------------Hello, Stimulus!--------------------------------")
  }

  popup() {
    // activate overlay
    document.getElementById("overlay").classList.add("active");

    // get the details of the selected menu item
    const cardInfo = this.element.querySelector(".invisible").innerHTML;

    // get the gridbox
    const gridbox = document.querySelector(".gridbox");

    // get the div that the menu item info will be inserted into
    const selectedItem = document.getElementById("selected-item");

    // nuke the gridbox
    gridbox.classList.add("invisible");

    // insert the content into popup
    selectedItem.insertAdjacentHTML("afterbegin", cardInfo);
  }

  popdown() {
  //de-activate overlay
   document.getElementById("overlay").classList.remove("active");

  // remove content from the menu item popup
  const selectedItem = document.getElementById("selected-item");
  selectedItem.innerHTML = '';

  // remove invisible class from gridbox
  document.querySelector(".gridbox").classList.remove("invisible");




  }

}
