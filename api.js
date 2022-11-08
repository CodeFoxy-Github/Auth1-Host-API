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
if (application == g) {
  console.log('Application Found! (Google)');
} else if (application == f) {
  console.log('Application Found! (Facebook)');
  if (buttontext == cf) {
    console.log('Facebook: Button-text = continue_with');
  } else if (buttontext == lf) {
    const code1 =
      '&lt;div class="fb-login-button" data-width="" data-size="large"data-button-type="continue_with" data-layout="default"data-auto-logout-link="false" data-use-continue-as="false"&lt;/div&gt;';

    console.log(code1);
    document.getElementById('code').innerHTML = code1;
    console.log('Facebook: Button-text = login_with');
  } else {
    console.log('N/A Button-text Not Support!/Not Exist. (' + buttontext + ')');
  }
} else {
  console.log('N/A Application Not Support!/Not Exist. (' + application + ')');
}
