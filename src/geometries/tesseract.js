import THREE from 'three';
import FourspaceGeometry from '../fourspace-geometry.js';

class TesseractGeometry extends FourspaceGeometry {
  constructor() {
    super();

    this.type = 'TesseractGeometry';
    const coordinates = [
      [-1, -1, -1, -1],
      [-1, -1, -1, 1],
      [-1, -1, 1, -1],
      [-1, -1, 1, 1],
      [-1, 1, -1, -1],
      [-1, 1, -1, 1],
      [-1, 1, 1, -1],
      [-1, 1, 1, 1],
      [1, -1, -1, -1],
      [1, -1, -1, 1],
      [1, -1, 1, -1],
      [1, -1, 1, 1],
      [1, 1, -1, -1],
      [1, 1, -1, 1],
      [1, 1, 1, -1],
      [1, 1, 1, 1]
    ];

    let vertices = new Float32Array(coordinates.length * 4);
    for (var i = 0; i < coordinates.length; i++) {
      vertices[i * 4 + 0] = coordinates[i][0];
      vertices[i * 4 + 1] = coordinates[i][1];
      vertices[i * 4 + 2] = coordinates[i][2];
      vertices[i * 4 + 3] = coordinates[i][3];
    }

    this.addAttribute('position', new THREE.BufferAttribute(vertices, 4));
  }
}
