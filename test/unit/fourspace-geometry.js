import FourspaceGeometry from '../../src/fourspace-geometry.js';
import THREE from 'three';
import jsc from 'jsverify';
import { fixedArray, allEqual } from './property-helper.js';

describe('FourspaceGeometry', () => {
  describe('computeBoundingBox', () => {
    it('should generate a 0x0x0x0 4D bounding box with no vertices', () => {
      let geometry = new FourspaceGeometry();
      geometry.computeBoundingBox();

      let box = geometry.boundingBox;
      expect(box.min.toArray()).to.deep.equal([0,0,0,0]);
      expect(box.max.toArray()).to.deep.equal([0,0,0,0]);
    });

    it('should generate a 0x0x0x0 4D bounding box with one vertex at origin', () => {
      let geometry = new FourspaceGeometry();
      let coords = Float32Array.from([0,0,0,0]);
      geometry.addAttribute('position', new THREE.BufferAttribute(coords, 4));
      geometry.computeBoundingBox();

      let box = geometry.boundingBox;
      expect(box.min.toArray()).to.deep.equal([0,0,0,0]);
      expect(box.max.toArray()).to.deep.equal([0,0,0,0]);
    });

    jsc.property('should generate a correct bounding box for a single coordinate', fixedArray(jsc.number, 4), (arr) => {
      let geometry = new FourspaceGeometry();
      let coords = Float32Array.from(arr);
      geometry.addAttribute('position', new THREE.BufferAttribute(coords, 4));
      geometry.computeBoundingBox();

      let box = geometry.boundingBox;
      return allEqual(box.min.toArray(), coords) && allEqual(box.max.toArray(), coords);
    });
  });
});
