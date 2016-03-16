import jsc from 'jsverify';

function fixedArray(gen, len) {
  var tuple = Array.apply(null, Array(len)).map(() => { return gen; });
  return jsc.tuple(tuple);
}

export { fixedArray };
