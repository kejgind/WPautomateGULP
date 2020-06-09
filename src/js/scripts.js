// query single DOM element
window.$ = document.querySelector.bind(document);

// query multiple DOM elements
window.$$ = document.querySelectorAll.bind(document);

// add event listener - single element / multiple elements array
Node.prototype.on = window.on = function (name, fn) {
    this.addEventListener(name, fn);
}

NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
    Array.prototype.slice.call(this).forEach(function (elem, i) {
        elem.on(name, fn);
    });
}