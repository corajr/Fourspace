import FourspaceGeometry from './fourspace-geometry.js';
import TesseractGeometry from './geometries/tesseract.js';
import FourspaceShader from './shaders/FourspaceShader.js';
import { applyMatrixToVec4Array } from './math/Matrix.js';
import Box4 from './math/Box4.js';

const Fourspace = {
  Box4,
  FourspaceGeometry,
  TesseractGeometry,
  FourspaceShader,
  applyMatrixToVec4Array
};

export default Fourspace;
