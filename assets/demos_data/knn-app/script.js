const displayWidth = 400;
const displayHeight = 400;
const dataSetSize = 30;
const options = {
  rootNode: '#knn',
  width: displayWidth,
  height: displayHeight,
  backgroundColor: 'black',
  circleFill: '#3fe4h2',
  circleStroke: 'white' };

const types = ['A', 'B', 'C'];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function createRandomEllipsoidCoordinates(width, height, cx, cy) {
  const rho = Math.sqrt(Math.random());
  const phi = Math.random() * Math.PI * 2;
  const rands = { x: getRandomInt(-width / 2, width / 2), y: getRandomInt(-height / 2, height / 2) };
  const x = rho * Math.cos(phi) * width / 2 + cx + rands.x;
  const y = rho * Math.sin(phi) * height / 2 + cy + rands.y;
  return { x, y };
}
function createRandomData() {
  const ellipsoidOptions = {
    'A': {
      width: displayWidth / 3,
      height: displayWidth / 3,
      cx: displayWidth / 3,
      cy: displayHeight / 3 },

    'B': {
      width: displayWidth / 2.5,
      height: displayWidth / 2.5,
      cx: displayWidth * 0.5,
      cy: displayHeight * 0.8 },
    
    'C': {
      width: displayWidth / 2.5,
      height: displayWidth / 2.5,
      cx: displayWidth * 0.2,
      cy: displayHeight * 0.8 },
    
    };

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    

  return Array.apply(null, Array(dataSetSize)).
  map(d => {
    const type = types[getRandomInt(3)];
    const { width, height, cx, cy } = ellipsoidOptions[type];
    const { x, y } = createRandomEllipsoidCoordinates(width, height, cx, cy);
    return { x, y, type };
  });

}
const data = createRandomData();
const k = 3;
const vis = new d3ml.KNNVisualization(data, options, types, k);
vis.draw();