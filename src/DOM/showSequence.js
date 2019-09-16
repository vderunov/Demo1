import {
  checkParamTask6,
  createNotification,
  numericSequence,
  getElem,
} from '../../main.js';

export default function showSequence() {
  const rowLengthSequence = getElem('#row-length-sequence').value;
  const squareValue = getElem('#square-value').value;
  const rootSequence = getElem('#root-sequence');
  const notification = getElem('.notification-sequence');
  const errorMessage = checkParamTask6(rowLengthSequence, squareValue);

  if (notification.firstChild) {
    notification.children[0].remove();
  }

  if (errorMessage) {
    notification.append(createNotification(errorMessage));
    return errorMessage;
  }

  if (rootSequence.children[0]) {
    rootSequence.children[0].remove();
  }

  const span = document.createElement('span');
  span.innerHTML = numericSequence(rowLengthSequence, squareValue);
  rootSequence.append(span);

  return span.innerHTML;
}
