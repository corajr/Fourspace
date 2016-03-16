import THREE from 'three';
import Box4 from './math/Box4';

class FourspaceGeometry extends THREE.BufferGeometry {
  constructor() {
    super();

    this.type = 'FourspaceGeometry';
  }

  computeBoundingBox() {
    if (this.boundingBox === null) {
      this.boundingBox = new Box4();
    }

    let positions = this.attributes.position;

    if (positions && positions.array) {
      this.boundingBox.setFromArray(positions.array);
    } else {
      this.boundingBox.min.set(0, 0, 0, 0);
      this.boundingBox.max.set(0, 0, 0, 0);
    }

    return this.boundingBox;
  }

  computeBoundingSphere() {
    this.computeBoundingBox();
    if (this.boundingSphere === null) {
      this.boundingSphere = new THREE.Sphere();
    }

    this.boundingSphere.center = new THREE.Vector3()
      .addVectors(this.boundingBox.min, this.boundingBox.max)
      .multiplyScalar(0.5);
  }
}

export default FourspaceGeometry;
