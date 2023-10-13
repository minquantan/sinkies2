import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    // this.element.textContent = "Hello World!"
    // console.log("works or no?")
    console.log("Hello, Stimulus!", this.element)
  }

  display() {
    console.log("please display")
    const menu = document.querySelector(".dropdown-menu")

    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    }  else {
      menu.classList.add("hidden");
    }
  }
}
