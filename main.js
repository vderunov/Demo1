import showChessBoard from './src/task1.js';
import makeTrianglesSorting from './src/task3.js';
import getPalindrome from './src/task4.js';
import luckyTicketCounting from './src/task5.js';
import numericSequence from './src/task6.js';
import {
  getFibonacci,
  getFibonacciSeries,
  getFibonacciMinMax
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

const $ = function getElement(selector) {
  return document.querySelector(selector);
};

(function getButtons() {
  const btnList = [
    ['.btnChess', 'click', createChess],
    ['.btnGetSort', 'click', createBase],
    ['.btnClearBase', 'click', clearBase],
    ['.btnPalindrome', 'click', showPalindrome],
    ['.btnTickets', 'click', showLuckyTickets],
    ['.btnSequence', 'click', showSequence],
    ['.btnFibLength', 'click', showFibLength],
    ['.btnFibMinMax', 'click', showFibRange],
    ['.btnAnalyse', 'click', showAnalyzeEnvelopes]
  ];

  btnList.forEach(el => {
    $(el[0]).addEventListener(el[1], el[2]);
  });
})();

// tabs

makeTabs();

// chess

function createChess() {
  const length = $('#length').value;
  const width = $('#width').value;
  const symbol = $('#symbol').value;
  const rootChess = $('.root-chess');
  const errorMessage = checkParamTask1(length, width, symbol);

  if (errorMessage) {
    console.log(errorMessage);
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

// analyze envelopes

function showAnalyzeEnvelopes() {
  const rootEnvelopes = $('#root-envelopes');
  const envelopeA = {};
  const envelopeB = {};

  envelopeA.width = parseFloat($('#width-env-a').value);
  envelopeA.height = parseFloat($('#height-env-a').value);
  envelopeB.width = parseFloat($('#width-env-b').value);
  envelopeB.height = parseFloat($('#height-env-b').value);

  const errorMessage = checkParamTask2(envelopeA, envelopeB);

  if (errorMessage) {
    console.log(errorMessage);
    return errorMessage;
  }

  if (rootEnvelopes.children[0]) {
    rootEnvelopes.children[0].remove();
  }

  const span = document.createElement('span');
  const result = analyzeEnvelopes(envelopeA, envelopeB);

  span.innerHTML = result;
  rootEnvelopes.append(span);

  return span.innerHTML;
}

// triangles sorting

let arrTrianglesBase = [];

function createBase() {
  const objTriangle = {};

  objTriangle.vertices = $('#vertices').value;
  objTriangle[$('#first-side-letter').value] = parseInt(
    $('#first-side-size').value,
    10
  );
  objTriangle[$('#second-side-letter').value] = parseInt(
    $('#second-side-size').value,
    10
  );
  objTriangle[$('#third-side-letter').value] = parseInt(
    $('#third-side-size').value,
    10
  );

  arrTrianglesBase.push(objTriangle);

  const errorMessage = checkParamTask3(arrTrianglesBase);

  if (errorMessage) {
    arrTrianglesBase = arrTrianglesBase.slice(0, arrTrianglesBase.length - 1);
    console.log(errorMessage);
    return errorMessage;
  }
  $('#root-triangles').innerHTML = makeTrianglesSorting(arrTrianglesBase);

  return arrTrianglesBase;
}

function clearBase() {
  arrTrianglesBase = [];
}

// palindrome

function showPalindrome() {
  const valuePalindrome = $('#value-palindrome').value;
  const rootPalindrome = $('#root-palindrome');
  const errorMessage = checkParamTask4(valuePalindrome);

  if (errorMessage) {
    console.log(errorMessage);
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

// lucky tickets

function showLuckyTickets() {
  const initialObject = {};
  const min = $('#min-value-tickets').value;
  const max = $('#max-value-tickets').value;
  const rootTickets = $('#root-tickets');

  initialObject.min = min;
  initialObject.max = max;

  const errorMessage = checkParamTask5(initialObject);

  if (errorMessage) {
    console.log(errorMessage);
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

// numeric sequence

function showSequence() {
  const rowLengthSequence = $('#row-length-sequence').value;
  const squareValue = $('#square-value').value;
  const rootSequence = $('#root-sequence');
  const errorMessage = checkParamTask6(rowLengthSequence, squareValue);

  if (errorMessage) {
    console.log(errorMessage);
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

// fibonacci

function showFibLength() {
  const fibLength = parseInt($('#fib-length').value, 10);
  const rootFibLength = $('#root-fib-length');
  const context = {};

  context.length = fibLength;

  const errorMessage = checkParamTask7(context);

  if (errorMessage) {
    console.log(errorMessage);
    return errorMessage;
  }

  if (rootFibLength.children[0]) {
    rootFibLength.children[0].remove();
  }

  const span = document.createElement('span');
  span.innerHTML = getFibonacci(context);
  rootFibLength.append(span);

  return span.innerHTML;
}

function showFibRange() {
  const fibMin = parseInt($('#fib-min').value, 10);
  const fibMax = parseInt($('#fib-max').value, 10);
  const rootFibMinMax = $('#root-FibMinMax');
  const context = {};

  context.min = fibMin;
  context.max = fibMax;

  const errorMessage = checkParamTask7(context);

  if (errorMessage) {
    console.log(errorMessage);
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
