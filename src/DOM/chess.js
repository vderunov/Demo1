import {
  checkParamTask1,
  createNotification,
  showChessBoard,
  getElem,
} from '../../main.js';

export default function createChess() {
  const length = getElem('#length').value;
  const width = getElem('#width').value;
  const symbol = getElem('#symbol').value;
  const rootChess = getElem('#root-chess');
  const notification = getElem('.notification-chess');
  const errorMessage = checkParamTask1(length, width, symbol);

  if (notification.firstChild) {
    notification.children[0].remove();
  }

  if (errorMessage) {
    notification.append(createNotification(errorMessage));
    return errorMessage;
  }

  if (rootChess.children[0]) {
    rootChess.children[0].remove();
  }

  const pre = document.createElement('pre');
  pre.innerHTML = showChessBoard(length, width, symbol);
  rootChess.append(pre);

  return pre.innerHTML;
}
