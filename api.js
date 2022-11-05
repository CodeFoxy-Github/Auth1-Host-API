const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const application = urlParams.get('app');
const buttontext = urlParams.get('buttontext');
const g = 'google';
const f = 'facebook';
const lf = 'login_with';
const cf = 'continue_with';
if (application == g) {
  console.log('Application Found! (Google)');
} else if (application == f) {
  console.log('Application Found! (Facebook)');
  if (buttontext == cf) {
    console.log('Facebook: Button-text = continue_with');
  } else if (buttontext == lf) {
    console.log('Facebook: Button-text = login_with');
    const code1 = ('\<div class=\"fb-login-button\" data-width=\"\" data-size=\"large\" data-button-type=\"continue_with\" data-layout=\"default\" data-auto-logout-link=\"false\" data-use-continue-as=\"false\"\>\<\/div\>')
  } else {
    console.log('N/A Button-text No Found! (' + buttontext + ')');

  }
} else {
  console.log('N/A Application No Found! (' + application + ')');
}
