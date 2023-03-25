const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const application = urlParams.get('app');
const buttontext = urlParams.get('btntext');
const g = 'google';
const f = 'facebook';
const lf = 'login_with';
const cf = 'continue_with';
console.log('%cWARNING', 'font-size:10em;color:red;');
console.log(
  `%cThis is a browser feature intended for developers.
Do NOT copy and paste something here if you do not understand it.

You can learn more at:
https://en.wikipedia.org/wiki/Self-XSS`,
  'font-size:2em'
);
