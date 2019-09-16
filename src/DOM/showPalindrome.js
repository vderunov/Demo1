import {
  checkParamTask4,
  createNotification,
  getPalindrome,
  getElem,
} from '../../main.js';

export default function showPalindrome() {
  const valuePalindrome = getElem('#value-palindrome').value;
  const rootPalindrome = getElem('#root-palindrome');
  const notification = getElem('.notification-palindrome');
  const errorMessage = checkParamTask4(valuePalindrome);

  if (notification.firstChild) {
    notification.children[0].remove();
  }

  if (errorMessage) {
    notification.append(createNotification(errorMessage));
    return errorMessage;
  }

  if (rootPalindrome.children[0]) {
    rootPalindrome.children[0].remove();
  }

  const span = document.createElement('span');
  span.innerHTML = getPalindrome(valuePalindrome);
  rootPalindrome.append(span);

  return span.innerHTML;
}
