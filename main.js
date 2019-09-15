import showChessBoard from './src/task1.js';
import makeTrianglesSorting from './src/task3.js';
import getPalindrome from './src/task4.js';
import luckyTicketCounting from './src/task5.js';
import numericSequence from './src/task6.js';
import {
  getFibonacci,
  getFibonacciSeries,
  getFibonacciMinMax,
} from './src/task7.js';
import analyzeEnvelopes from './src/task2.js';
import checkParamTask1 from './src/components/checkParamTask1.js';
import checkParamTask2 from './src/components/checkParamTask2.js';
import checkParamTask3 from './src/components/checkParamTask3.js';
import checkParamTask4 from './src/components/checkParamTask4.js';
import checkParamTask5 from './src/components/checkParamTask5.js';
import checkParamTask6 from './src/components/checkParamTask6.js';
import checkParamTask7 from './src/components/checkParamTask7.js';
import makeTabs from './src/components/tabs.js';
import clearInputs from './src/components/clearAllInputs.js';
import createNotification from './src/components/createNotification.js';

const $ = function getElement(selector) {
  return document.querySelector(selector);
};

// tabs

makeTabs();

// chess

const task1 = function createChess() {
  const length = $('#length').value;
  const width = $('#width').value;
  const symbol = $('#symbol').value;
  const rootChess = $('#root-chess');
  const errorMessage = checkParamTask1(length, width, symbol);
  const notification = $('.notification-chess');

  if (notification.firstChild) {
    notification.children[0].remove();
  }

  if (errorMessage) {
    console.log(errorMessage);
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
};

// analyze envelopes

const task2 = function showAnalyzeEnvelopes() {
  const rootEnvelopes = $('#root-envelopes');
  const envelopeA = {};
  const envelopeB = {};

  envelopeA.width = $('#width-env-a').value;
  envelopeA.height = $('#height-env-a').value;
  envelopeB.width = $('#width-env-b').value;
  envelopeB.height = $('#height-env-b').value;
  const notification = $('.notification-envelopes');

  if (notification.firstChild) {
    notification.children[0].remove();
  }

  const errorMessage = checkParamTask2(envelopeA, envelopeB);

  if (errorMessage) {
    console.log(errorMessage);
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
};

// triangles sorting

let arrTrianglesBase = [];

const task3 = function showTrianglesSort() {
  const objTriangle = {};
  const notification = $('.notification-triangles');

  if (notification.firstChild) {
    notification.children[0].remove();
  }

  objTriangle.vertices = $('#vertices').value;
  objTriangle[$('#first-side-letter').value] = $('#first-side-size').value;
  objTriangle[$('#second-side-letter').value] = $('#second-side-size').value;
  objTriangle[$('#third-side-letter').value] = $('#third-side-size').value;

  arrTrianglesBase.push(objTriangle);
  const errorMessage = checkParamTask3(arrTrianglesBase);

  if (errorMessage) {
    arrTrianglesBase = arrTrianglesBase.slice(0, arrTrianglesBase.length - 1);
    console.log(errorMessage);
    notification.append(createNotification(errorMessage));

    return errorMessage;
  }

  $('#root-triangles').innerHTML = makeTrianglesSorting(arrTrianglesBase);

  return arrTrianglesBase;
};

const clearBase = function clearBaseOfTriangles() {
  arrTrianglesBase = [];
};

// palindrome

const task4 = function showPalindrome() {
  const valuePalindrome = $('#value-palindrome').value;
  const rootPalindrome = $('#root-palindrome');
  const errorMessage = checkParamTask4(valuePalindrome);
  const notification = $('.notification-palindrome');

  if (notification.firstChild) {
    notification.children[0].remove();
  }

  if (errorMessage) {
    console.log(errorMessage);
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
};

// lucky tickets

const task5 = function showLuckyTickets() {
  const initialObject = {};
  const min = $('#min-value-tickets').value;
  const max = $('#max-value-tickets').value;
  const rootTickets = $('#root-tickets');
  const notification = $('.notification-tickets');

  if (notification.firstChild) {
    notification.children[0].remove();
  }

  initialObject.min = min;
  initialObject.max = max;

  const errorMessage = checkParamTask5(initialObject);

  if (errorMessage) {
    console.log(errorMessage);
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
};

// numeric sequence

const task6 = function showSequence() {
  const rowLengthSequence = $('#row-length-sequence').value;
  const squareValue = $('#square-value').value;
  const rootSequence = $('#root-sequence');
  const errorMessage = checkParamTask6(rowLengthSequence, squareValue);
  const notification = $('.notification-sequence');

  if (notification.firstChild) {
    notification.children[0].remove();
  }

  if (errorMessage) {
    console.log(errorMessage);
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
};

// fibonacci

const task7Length = function showFibLength() {
  const fibLength = parseInt($('#fib-length').value, 10);
  const rootFibLength = $('#root-fib-length');
  const context = {};
  const notification = $('.notification-fib-length');

  if (notification.firstChild) {
    notification.children[0].remove();
  }

  context.length = fibLength;
  const errorMessage = checkParamTask7(context);

  if (errorMessage) {
    console.log(errorMessage);
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
};

const task7Range = function showFibRange() {
  const fibMin = parseInt($('#fib-min').value, 10);
  const fibMax = parseInt($('#fib-max').value, 10);
  const rootFibMinMax = $('#root-fibMinMax');
  const context = {};
  const notification = $('.notification-fibMinMax');

  if (notification.firstChild) {
    notification.children[0].remove();
  }

  context.min = fibMin;
  context.max = fibMax;

  const errorMessage = checkParamTask7(context);

  if (errorMessage) {
    console.log(errorMessage);
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
};

(function() {
  const btnList = [
    ['.btnChess', 'click', task1],
    ['.btnAnalyse', 'click', task2],
    ['.btnGetSort', 'click', task3],
    ['.btnClearBase', 'click', clearBase],
    ['.btnPalindrome', 'click', task4],
    ['.btnTickets', 'click', task5],
    ['.btnSequence', 'click', task6],
    ['.btnFibLength', 'click', task7Length],
    ['.btnFibMinMax', 'click', task7Range],
  ];

  btnList.forEach(el => {
    $(el[0]).addEventListener(el[1], el[2]);
  });
})();
