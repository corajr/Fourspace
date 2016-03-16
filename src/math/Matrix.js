import THREE from 'three';

function applyMatrixToVec4Array(matrix, array) {
  let v1 = new THREE.Vector4();
  let offset = 0;
  let length = array.length;
  for (var i = 0, j = offset; i < length; i += 4, j += 4) {
    v1.fromArray(array, j);
    v1.applyMatrix4(matrix);
    v1.toArray(array, j);
  }

  return array;
}

export { applyMatrixToVec4Array };
