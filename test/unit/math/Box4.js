import Box4 from '../../../src/math/Box4.js';

describe('Box4', () => {
  describe('setFromArray', () => {
    it('should generate an infinite 4D bounding box when given an empty array', () => {
      let box = new Box4();
      box.setFromArray([]);
      expect(box.min.x).to.equal(+Infinity);
      expect(box.min.y).to.equal(+Infinity);
      expect(box.min.z).to.equal(+Infinity);
      expect(box.min.w).to.equal(+Infinity);

      expect(box.max.x).to.equal(-Infinity);
      expect(box.max.y).to.equal(-Infinity);
      expect(box.max.z).to.equal(-Infinity);
      expect(box.max.w).to.equal(-Infinity);
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
      expect(box.min.x).to.equal(-1);
      expect(box.min.y).to.equal(-1);
      expect(box.min.z).to.equal(-1);
      expect(box.min.w).to.equal(-1);

      expect(box.max.x).to.equal(1);
      expect(box.max.y).to.equal(1);
      expect(box.max.z).to.equal(1);
      expect(box.max.w).to.equal(1);
    });
  });
});
