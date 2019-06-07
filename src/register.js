import badge from './index';

// Simple 'DOMContentLoaded' helper, via http://youmightnotneedjquery.com/#ready:
function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', () => fn());
  }
}

// For browser builds (or impatient npm users) we'll provide
// this entry-point which autoruns the package w/ defaults.
ready(badge);
