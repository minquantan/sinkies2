import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    // this.element.textContent = "Hello World!"
    // console.log("works or no?")
    console.log("Hello, Stimulus!", this.element)
  }

  popup() {
    document.getElementById("overlay").classList.add("active");
    console.log(this.element);
    const card = this.element.querySelector(".invisible");
    console.log(card);
    const preview = this.element.querySelector(".preview");
    console.log(preview);

    preview.classList.add("invisible");
    card.classList.remove("invisible");


  }

}
