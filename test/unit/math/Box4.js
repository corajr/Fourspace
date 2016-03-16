import Box4 from '../../../src/math/Box4.js';
import jsc from 'jsverify';
import { fixedArray, allEqual } from '../property-helper.js';

describe('Box4', () => {
  describe('setFromArray', () => {
    it('should generate an infinite 4D bounding box when given an empty array', () => {
      let box = new Box4();
      box.setFromArray([]);
      expect(box.min.toArray()).to.deep.equal([+Infinity, +Infinity, +Infinity, +Infinity]);
      expect(box.max.toArray()).to.deep.equal([-Infinity, -Infinity, -Infinity, -Infinity]);
    });

    it('should generate a 2x2x2x2 bounding box when given a unit hypercube', () => {
      let box = new Box4();
      const coordinates = [
          -1, -1, -1, -1,
          -1, -1, -1, 1,
          -1, -1, 1, -1,
          -1, -1, 1, 1,
          -1, 1, -1, -1,
          -1, 1, -1, 1,
          -1, 1, 1, -1,
          -1, 1, 1, 1,
        1, -1, -1, -1,
        1, -1, -1, 1,
        1, -1, 1, -1,
        1, -1, 1, 1,
        1, 1, -1, -1,
        1, 1, -1, 1,
        1, 1, 1, -1,
        1, 1, 1, 1
      ];

      box.setFromArray(coordinates);

      expect(box.min.toArray()).to.deep.equal([-1, -1, -1, -1]);
      expect(box.max.toArray()).to.deep.equal([1, 1, 1, 1]);
    });

    jsc.property('should generate a bounding box from Float32Array coords', fixedArray(jsc.number, 4), (arr) => {
      let box = new Box4();
      let coords = Float32Array.from(arr);
      box.setFromArray(coords);
      return allEqual(box.min.toArray(), coords) && allEqual(box.max.toArray(), coords);
    });
  });
});
