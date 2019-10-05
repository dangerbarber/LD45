export const getIndexByCoord = (x, y, width, height) => width * (y % height) + (x % width)

export const readPatch = ({
  data = [null],
  x = 0,
  y = 0,
  width = 0,
  height = 0,
  planeWidth = 1,
  planeHeight = 1,
  action = () => {}
}) => {
  const lastX = (x + width) % planeWidth
  const lastY = (y + height) % planeHeight
  let relX = 0
  let relY = 0
  for (let curY = y; y < lastY; y = (y + 1) % planeWidth) {
    for (let curX = x; x < lastX; x = (x + 1) % planeHeight) {
      action({ data: data[curY * width + curX], x: curX, y: curY, relX, relY })
      ++relX
    }
    ++relY
  }
}

export const initializePlane = ({ width = 1, height = 1, initializer = () => null }) => {
  const data = []
  for (let y = 0; y < height; ++y) {
    for (let x = 0; x < width; ++x) {
      data.push(initializer(x, y))
    }
  }
  return data
}

export default class World {
  constructor({ width = 1, height = 1, seed = '' }) {
    this._baseGroundLayer = initializePlane({ width, height, initializer: () => 0 })
    this._topGroundLayer = initializePlane({ width, height, initializer: () => null })
    this._baseLayer = initializePlane({ width, height, initializer: () => null })
    this._topLayer = initializePlane({ width, height, initializer: () => null })
  }
}
