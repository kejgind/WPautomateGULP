export const pageHeight = function () {
  return window.innerHeight != null
    ? window.innerHeight
    : document.documentElement && document.documentElement.clientHeight
    ? document.documentElement.clientHeight
    : document.body != null
    ? document.body.clientHeight
    : null;
};

export const posTop = function () {
  return typeof window.pageYOffset !== "undefined"
    ? window.pageYOffset
    : document.documentElement && document.documentElement.scrollTop
    ? document.documentElement.scrollTop
    : document.body.scrollTop
    ? document.body.scrollTop
    : 0;
};

export const pageWidth = function () {
  return window.innerWidth != null
    ? window.innerWidth
    : document.documentElement && document.documentElement.clientWidth
    ? document.documentElement.clientWidth
    : document.body != null
    ? document.body.clientWidth
    : null;
};
