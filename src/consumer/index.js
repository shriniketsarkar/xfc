import Consumer from './consumer';

if (window && !window.onerror) {
  console.log('Adding event handler for window.onerror Consumer frame');
  window.onerror = (message, url, lineNumber) => {
    console.log('handleProvider : Error was handled in consumer frame :', message, url, lineNumber);
    return true;
  };
}

export default new Consumer();
