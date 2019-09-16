import {
  checkParamTask5,
  createNotification,
  luckyTicketCounting,
  getElem,
} from '../../main.js';

export default function showLuckyTickets() {
  const min = getElem('#min-value-tickets').value;
  const max = getElem('#max-value-tickets').value;
  const rootTickets = getElem('#root-tickets');
  const notification = getElem('.notification-tickets');
  const initialObject = {};

  if (notification.firstChild) {
    notification.children[0].remove();
  }

  initialObject.min = min;
  initialObject.max = max;

  const errorMessage = checkParamTask5(initialObject);

  if (errorMessage) {
    notification.append(createNotification(errorMessage));
    return errorMessage;
  }

  if (rootTickets.children[0]) {
    rootTickets.children[0].remove();
  }

  const span = document.createElement('span');
  const resultObj = luckyTicketCounting(initialObject);
  span.innerHTML = `<span>${resultObj.winner}! easy: ${resultObj.easy}, hard: ${resultObj.hard}</span>`;
  rootTickets.append(span);

  return span.innerHTML;
}
