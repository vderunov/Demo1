import {
  checkParamTask7,
  createNotification,
  getFibonacci,
  getElem,
} from '../../main.js';

function showFibLength() {
  const fibLength = getElem('#fib-length').value;
  const rootFibLength = getElem('#root-fib-length');
  const notification = getElem('.notification-fib-length');
  const context = {};

  if (notification.firstChild) {
    notification.children[0].remove();
  }

  context.length = fibLength;

  const errorMessage = checkParamTask7(context);

  if (errorMessage) {
    notification.append(createNotification(errorMessage));
    return errorMessage;
  }

  if (rootFibLength.children[0]) {
    rootFibLength.children[0].remove();
  }

  const textarea = document.createElement('textarea');
  textarea.innerHTML = getFibonacci(context);
  rootFibLength.append(textarea);

  return textarea.innerHTML;
}

function showFibRange() {
  const fibMin = parseInt(getElem('#fib-min').value, 10);
  const fibMax = parseInt(getElem('#fib-max').value, 10);
  const rootFibMinMax = getElem('#root-fibMinMax');
  const context = {};
  const notification = getElem('.notification-fibMinMax');

  if (notification.firstChild) {
    notification.children[0].remove();
  }

  context.min = fibMin;
  context.max = fibMax;

  const errorMessage = checkParamTask7(context);

  if (errorMessage) {
    notification.append(createNotification(errorMessage));
    return errorMessage;
  }

  if (rootFibMinMax.children[0]) {
    rootFibMinMax.children[0].remove();
  }

  const span = document.createElement('span');
  span.innerHTML = getFibonacci(context);
  rootFibMinMax.append(span);

  return span.innerHTML;
}

export { showFibLength, showFibRange };
