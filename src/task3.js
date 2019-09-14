const triangleSort = function makeTrianglesSorting(trianglesBase) {
  const array = [];

  for (let i = 0; i < trianglesBase.length; i += 1) {
    const [vertices, a, b, c] = Object.values(trianglesBase[i]);
    // Determine the half-perimeter
    const p = (a + b + c) * 0.5;
    // use Heron's formula
    const s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    array.push({ vertices, areaTriangle: s });
  }
  array.sort((a, b) => b.areaTriangle - a.areaTriangle);

  return array.map((element) => element.vertices);
};

export default triangleSort;
