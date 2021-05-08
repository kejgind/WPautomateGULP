/* eslint-disable no-undef */
import $ from "jquery";

class PageScroll {
  // 1. describe and create/initiate our object
  constructor() {
    this.scrollPage = $(`a.jsPageScroll`);

    this.events();
  }

  // 2. events
  events() {
    if (this.scrollPage.length > 0) {
      $(this.scrollPage).click(this.handleScrollPage.bind(this));
    }
  }

  // 3. methods (function, action...)
  handleScrollPage(e) {
    e.preventDefault();
    const searchSection = $(`${e.target.closest(".jsPageScroll").hash}`);

    if (!searchSection) return;

    const searchSectionPosition = $(searchSection).offset().top - 105;
    $("html, body").animate({ scrollTop: searchSectionPosition }, "slow");
    return false;
  }
}

export default PageScroll;
