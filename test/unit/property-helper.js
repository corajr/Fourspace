import jsc from 'jsverify';

function fixedArray(gen, len) {
  var tuple = Array.apply(null, Array(len)).map(() => { return gen; });
  return jsc.tuple(tuple);
}

function allEqual(arr1, arr2) {
  let len1 = arr1.length;
  let len2 = arr2.length;

  if (len1 !== len2) {
    return false;
  }

  for (var i = 0; i < len1; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

export { fixedArray, allEqual };
