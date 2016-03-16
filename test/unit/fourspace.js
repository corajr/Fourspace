import Fourspace from '../../src/fourspace';

describe('Fourspace', () => {
  it('should re-export other modules', () => {
    expect(Fourspace.Box4).to.exist;
  });
});
