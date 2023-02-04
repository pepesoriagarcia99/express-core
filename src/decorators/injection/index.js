const injectionWorker = new Worker('./worker.js');

const Injectable = (target) => {
  injectionWorker.postMessage({ function: 'add', target });
  injectionWorker.onmessage = (e) => {};
};

const Inject = (target) => {
  injectionWorker.postMessage({ function: 'add', target });
  return onmessage = (e) => e
};

module.exports = { Injectable, Inject };
