import Fourspace from '../../src/fourspace';

describe('Fourspace', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(Fourspace, 'greet');
      Fourspace.greet();
    });

    it('should have been run once', () => {
      expect(Fourspace.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(Fourspace.greet).to.have.always.returned('hello');
    });
  });
});
