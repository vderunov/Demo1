import {
  checkParamTask2,
  createNotification,
  analyzeEnvelopes,
  getElem,
} from '../../main.js';

export default function showAnalyzeEnvelopes() {
  const rootEnvelopes = getElem('#root-envelopes');
  const envelopeA = {};
  const envelopeB = {};

  envelopeA.width = getElem('#width-env-a').value;
  envelopeA.height = getElem('#height-env-a').value;
  envelopeB.width = getElem('#width-env-b').value;
  envelopeB.height = getElem('#height-env-b').value;
  const notification = getElem('.notification-envelopes');

  if (notification.firstChild) {
    notification.children[0].remove();
  }

  const errorMessage = checkParamTask2(envelopeA, envelopeB);

  if (errorMessage) {
    notification.append(createNotification(errorMessage));
    return errorMessage;
  }

  if (rootEnvelopes.children[0]) {
    rootEnvelopes.children[0].remove();
  }

  const span = document.createElement('span');
  span.innerHTML = analyzeEnvelopes(envelopeA, envelopeB);
  rootEnvelopes.append(span);

  return span.innerHTML;
}
