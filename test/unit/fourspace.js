import Fourspace from '../../src/fourspace';

describe('Fourspace', () => {
  it('should re-export other modules', () => {
    expect(Fourspace.Box4).to.exist;
    expect(Fourspace.FourspaceGeometry).to.exist;
    expect(Fourspace.TesseractGeometry).to.exist;
    expect(Fourspace.FourspaceShader).to.exist;
    expect(Fourspace.applyMatrixToVec4Array).to.exist;
  });
});
