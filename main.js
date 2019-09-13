import showChessBoard from './src/task1.js';
import makeTrianglesSorting from './src/task3.js';
import getPalindrome from './src/task4.js';
import luckyTicketCounting from './src/task5.js';
import numericSequence from './src/task6.js';
import { getFibonacci, getFibonacciSeries, getFibonacciMinMax } from './src/task7.js';
import checkParamTask1 from './src/components/checkParamTask1.js';
import checkParamTask3 from './src/components/checkParamTask3.js';
import checkParamTask4 from './src/components/checkParamTask4.js';
import checkParamTask5 from './src/components/checkParamTask5.js';
import checkParamTask6 from './src/components/checkParamTask6.js';
import checkParamTask7 from './src/components/checkParamTask7.js';
import makeTabs from './src/components/tabs.js';
import clearInputs from './src/components/clearAllInputs.js';

document.querySelector('.chessBtn').addEventListener('click', createChess);
document.querySelector('#get-sort').addEventListener('click', createBase);
document.querySelector('#clear-base-btn').addEventListener('click', clearBase);
document.querySelector('.palindromeBtn').addEventListener('click', showPalindrome);
document.querySelector('.btnTickets').addEventListener('click', showLuckyTickets);
document.querySelector('.btnSequence').addEventListener('click', showSequence);
document.querySelector('.btnFibLength').addEventListener('click', showFibLength);
document.querySelector('.btnFibMinMax').addEventListener('click', showFibRange);

// tabs

makeTabs();

// chess

function createChess() {
  const length = document.querySelector('#length').value;
  const width = document.querySelector('#width').value;
  const symbol = document.querySelector('#symbol').value;
  const rootChess = document.querySelector('.root-chess');
  const parameterError = checkParamTask1(length, width, symbol);

  if (parameterError) {
    console.log(parameterError);
    return parameterError;
  }

  if (rootChess.children[0]) {
    rootChess.children[0].remove();
  }

  const pre = document.createElement('pre');
  pre.innerHTML = showChessBoard(length, width, symbol);
  rootChess.append(pre);

  return pre.innerHTML;
}

// Triangles Sorting

let arrTrianglesBase = [];

function createBase() {
  const objTriangle = {};

  objTriangle.vertices = document.querySelector('#vertices').value;

  objTriangle[document.querySelector('#first-side-letter').value] = parseInt(
    document.querySelector('#first-side-size').value,
    10,
  );
  objTriangle[document.querySelector('#second-side-letter').value] = parseInt(
    document.querySelector('#second-side-size').value,
    10,
  );
  objTriangle[document.querySelector('#third-side-letter').value] = parseInt(
    document.querySelector('#third-side-size').value,
    10,
  );

  arrTrianglesBase.push(objTriangle);

  const parameterError = checkParamTask3(arrTrianglesBase);

  if (parameterError) {
    arrTrianglesBase = arrTrianglesBase.slice(0, arrTrianglesBase.length - 1);
    console.log(parameterError);
    return parameterError;
  }
  document.querySelector('#root-triangles').innerHTML = makeTrianglesSorting(arrTrianglesBase);

  return arrTrianglesBase;
}

function clearBase() {
  arrTrianglesBase = [];
}

// palindrome

function showPalindrome() {
  const valuePalindrome = document.querySelector('#value-palindrome').value;
  const rootPalindrome = document.querySelector('#root-palindrome');
  const parameterError = checkParamTask4(valuePalindrome);

  if (parameterError) {
    console.log(parameterError);
    return parameterError;
  }

  if (rootPalindrome.children[0]) {
    rootPalindrome.children[0].remove();
  }

  const span = document.createElement('span');
  span.innerHTML = getPalindrome(valuePalindrome);
  rootPalindrome.append(span);

  return span.innerHTML;
}

// Lucky tickets

function showLuckyTickets() {
  const initialObject = {};
  const min = document.querySelector('#min-value-tickets').value;
  const max = document.querySelector('#max-value-tickets').value;
  const rootTickets = document.querySelector('#root-tickets');

  initialObject.min = min;
  initialObject.max = max;

  const parameterError = checkParamTask5(initialObject);

  if (parameterError) {
    console.log(parameterError);
    return parameterError;
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

// Numeric sequence

function showSequence() {
  const rowLengthSequence = document.querySelector('#row-length-sequence').value;
  const squareValue = document.querySelector('#square-value').value;
  const rootSequence = document.querySelector('#root-sequence');
  const parameterError = checkParamTask6(rowLengthSequence, squareValue);

  if (parameterError) {
    console.log(parameterError);
    return parameterError;
  }

  if (rootSequence.children[0]) {
    rootSequence.children[0].remove();
  }

  const span = document.createElement('span');
  span.innerHTML = numericSequence(rowLengthSequence, squareValue);
  rootSequence.append(span);

  return span.innerHTML;
}

// Fibonacci

function showFibLength() {
  const fibLength = parseInt(document.querySelector('#fib-length').value, 10);
  const rootFibLength = document.querySelector('#root-fib-length');
  const context = {};

  context.length = fibLength;

  const parameterError = checkParamTask7(context);

  if (parameterError) {
    console.log(parameterError);
    return parameterError;
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
  const fibMin = parseInt(document.querySelector('#fib-min').value, 10);
  const fibMax = parseInt(document.querySelector('#fib-max').value, 10);
  const rootFibMinMax = document.querySelector('#root-FibMinMax');
  const context = {};

  context.min = fibMin;
  context.max = fibMax;

  const parameterError = checkParamTask7(context);

  if (parameterError) {
    console.log(parameterError);
    return parameterError;
  }

  if (rootFibMinMax.children[0]) {
    rootFibMinMax.children[0].remove();
  }

  const span = document.createElement('span');
  span.innerHTML = getFibonacci(context);
  rootFibMinMax.append(span);

  return span.innerHTML;
}
