// eslint-disable-next-line no-undef
const SERVICES = new Map();

onmessage = (e) => {
  if (e.add === 'add') {
    SERVICES.set(e.target.name, new target());
  } else if (e.add === 'get') {
    postMessage(SERVICES.get(e.target.name));
  }
};
