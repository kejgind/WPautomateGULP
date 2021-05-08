class Accordion {
  // 1. describe and create/initiate our object
  constructor(accordionElement) {
    // this.accordion = document.querySelector(`.${accordionClass}`);
    this.accordion = accordionElement;
    this.currentTab = null;
    this.accordionClosed = false;
    this.accordionActive = false;

    if (this.accordion) {
      this.accordionBtns = Array.from(
        this.accordion.querySelectorAll(".jsAccordionBtn")
      );
      this.accordionContents = Array.from(
        this.accordion.querySelectorAll(".jsAccordionContent")
      );

      if (this.accordionBtns.length && this.accordionContents.length) {
        this.events();
      }
    }
  }

  // 2. events
  events() {
    window.addEventListener(
      "DOMContentLoaded",
      this.prepareAccordion.bind(this),
      { once: true }
    );
    window.addEventListener("resize", this.maintainContentHeight.bind(this));
    this.accordion.addEventListener(
      "click",
      this.handleAccordionClick.bind(this)
    );
  }

  // 3. methods (function, action...)
  prepareAccordion() {
    this.accordionBtns.map((btn, idx) => {
      btn.classList.remove("is-hidden");
      btn.removeAttribute("aria-hidden");
      btn.setAttribute("aria-expanded", "false");
    });
    this.accordionContents.map((content, idx) => {
      content.setAttribute("aria-hidden", "true");
      content.style.height = 0;
    });
    this.currentTab = null;
    this.accordionClosed = true;
    this.accordionActive = true;
  }

  maintainContentHeight() {
    if (!this.accordionActive || this.accordionClosed) return;

    const innerHeight = this.currentTab.firstElementChild.getBoundingClientRect()
      .height;
    this.currentTab.style.height = innerHeight + "px";
  }

  closeAllItems() {
    this.accordionBtns.forEach((btn) =>
      btn.setAttribute("aria-expanded", "false")
    );
    this.accordionContents.forEach((content) => {
      content.setAttribute("aria-hidden", "true");
      content.style.height = 0;
    });
    this.accordionClosed = true;
  }

  handleAccordionClick(e) {
    const clickedElement = e.target.closest(".jsAccordionBtn");

    if (!clickedElement) {
      return;
    }

    const itemToOpen = clickedElement.nextElementSibling;

    const height = itemToOpen.scrollHeight;

    if (itemToOpen.style.height === "0px" || itemToOpen.style.height === "") {
      this.closeAllItems();
      itemToOpen.style.height = height + "px";
      clickedElement.setAttribute("aria-expanded", "true");
      itemToOpen.setAttribute("aria-hidden", "false");
      this.currentTab = itemToOpen;
      this.accordionClosed = false;
    } else {
      this.closeAllItems();
    }
  }
}

export default Accordion;
