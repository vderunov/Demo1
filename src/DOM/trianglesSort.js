import {
  checkParamTask3,
  createNotification,
  makeTrianglesSorting,
  getElem,
} from '../../main.js';

getElem('.btnClearBase').addEventListener('click', clearBaseOfTriangles);

let arrTrianglesBase = [];

export default function showTrianglesSort() {
  const notification = getElem('.notification-triangles');
  const objTriangle = {};

  if (notification.firstChild) {
    notification.children[0].remove();
  }

  objTriangle.vertices = getElem('#vertices').value;
  objTriangle[getElem('#first-side-letter').value] = getElem(
    '#first-side-size',
  ).value;
  objTriangle[getElem('#second-side-letter').value] = getElem(
    '#second-side-size',
  ).value;
  objTriangle[getElem('#third-side-letter').value] = getElem(
    '#third-side-size',
  ).value;

  arrTrianglesBase.push(objTriangle);
  const errorMessage = checkParamTask3(arrTrianglesBase);

  if (errorMessage) {
    arrTrianglesBase = arrTrianglesBase.slice(0, arrTrianglesBase.length - 1);
    notification.append(createNotification(errorMessage));
    return errorMessage;
  }

  getElem('#root-triangles').innerHTML = makeTrianglesSorting(arrTrianglesBase);

  return arrTrianglesBase;
}

function clearBaseOfTriangles() {
  arrTrianglesBase = [];
}
