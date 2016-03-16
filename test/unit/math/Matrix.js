import THREE from 'three';
import { applyMatrixToVec4Array } from '../../../src/math/Matrix.js';
import jsc from 'jsverify';
import _ from 'lodash';

function fixedArray(gen, len) {
  var tuple = Array.apply(null, Array(len)).map(() => { return gen; });
  return jsc.tuple(tuple);
}

describe('applyMatrixToVec4Array', () => {
  const identity = new THREE.Matrix4();

  it('should multiply a single 4D Vector by the identity matrix', () => {
    let vecs = [2, 3, 4, 5];
    applyMatrixToVec4Array(identity, vecs);
    expect(vecs).to.deep.equal([2, 3, 4, 5]);
  });

  jsc.property('should not change an array, when using the identity matrix', fixedArray(jsc.number, 8), (arr) => {
    let arr2 = arr.slice();
    applyMatrixToVec4Array(identity, arr2);
    return _.isEqual(arr, arr2);
  });
});
