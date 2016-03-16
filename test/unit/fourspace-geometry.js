import FourspaceGeometry from '../../src/fourspace-geometry.js';

describe('FourspaceGeometry', () => {
  describe('computeBoundingBox', () => {
    it('should generate a 0x0x0x0 4D bounding box with no vertices', () => {
      let geometry = new FourspaceGeometry();
      geometry.computeBoundingBox();

      let box = geometry.boundingBox;
      expect(box.min.x).to.equal(0);
      expect(box.min.y).to.equal(0);
      expect(box.min.z).to.equal(0);
      expect(box.min.w).to.equal(0);
      expect(box.max.x).to.equal(0);
      expect(box.max.y).to.equal(0);
      expect(box.max.z).to.equal(0);
      expect(box.max.w).to.equal(0);
    });
  });
});
