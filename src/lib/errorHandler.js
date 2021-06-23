/* eslint no-console: 0 */

if (window && !window.onerror) {
  console.log('Adding event handler for window.onerror Consumer frame');
  window.onerror = (errMessage, errUrl, errLineNumber) => {
    console.group();
    console.log('Error handled in Consumer iframe :');
    console.log('Error Message :', errMessage);
    console.log('URL :', errUrl);
    console.log('LineNo :', errLineNumber);
    console.error('Error handled in Consumer iframe :', errMessage, errUrl, errLineNumber);
    console.groupEnd();
    return true;
  };
}
