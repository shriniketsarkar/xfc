import Provider from './provider';

if (window && !window.onerror) {
  console.log('Adding event handler for window.onerror Provider frame');
  window.onerror = (message, url, lineNumber) => {
    console.log('handleConsumer : Error was handled in provider frame :', message, url, lineNumber);
    return true;
  };
}

export default new Provider();
