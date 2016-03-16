class Box4 extends THREE.Box3 {
  constructor(min = new THREE.Vector4(+Infinity, +Infinity, +Infinity, +Infinity),
              max = new THREE.Vector4(-Infinity, -Infinity, -Infinity, -Infinity)) {
    super(min, max);
  }

  makeEmpty() {
    this.min.x = this.min.y = this.min.z = this.min.w = +Infinity;
    this.max.x = this.max.y = this.max.z = this.max.w = -Infinity;
  }

  setFromArray(array) {
    this.makeEmpty();
    let v = new THREE.Vector4();

    for (var i = 0; i < array.length; i += 4) {
      v.fromArray(array, i);
      this.min.min(v);
      this.max.max(v);
    }
  }
}

export default Box4;
