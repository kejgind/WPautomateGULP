class Tabs {
  // 1. describe and create/initiate our object
  constructor(tabsClass) {
    this.tabs = document.querySelector(`.${tabsClass}`);

    if (this.tabs) {
      this.tabButtons = this.tabs.querySelectorAll('[role="tab"]');
      this.tabPanels = Array.from(
        this.tabs.querySelectorAll('[role="tabpanel"]')
      );

      this.events();
    }
  }

  // 2. events
  events() {
    this.tabButtons.forEach((button) =>
      button.addEventListener("click", this.handleTabClick.bind(this))
    );
  }

  // 3. methods (function, action...)
  handleTabClick(event) {
    // hide all tab panels
    this.tabPanels.forEach((panel) => {
      panel.hidden = true;
    });
    // mark all tabs as unselected
    this.tabButtons.forEach((tab) => {
      // tab.ariaSelected = false;
      tab.setAttribute("aria-selected", false);
    });
    // mark the clicked tab as selected
    event.currentTarget.setAttribute("aria-selected", true);
    // find the associated tabPanel and show it!
    const { id } = event.currentTarget;

    // METHOD 2 - find in the array of tabPanels
    // console.log(this.tabPanels);
    const tabPanel = this.tabPanels.find(
      (panel) => panel.getAttribute("aria-labelledby") === id
    );
    tabPanel.hidden = false;
  }
}

export default Tabs;
