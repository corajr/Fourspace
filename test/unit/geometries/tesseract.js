import TesseractGeometry from '../../../src/geometries/tesseract.js';

describe('TesseractGeometry', () => {
  it('should have a bounding box of 2x2x2x2', () => {
    let tesseract = new TesseractGeometry();
    tesseract.computeBoundingBox();
    let box = tesseract.boundingBox;

    expect(box.min.toArray()).to.deep.equal([-1,-1,-1,-1]);
    expect(box.max.toArray()).to.deep.equal([1,1,1,1]);
  });
});
