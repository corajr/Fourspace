THREE.FourspaceGeometry = function () {
  THREE.BufferGeometry.call( this );

  this.type = 'FourspaceGeometry';

};

THREE.FourspaceGeometry.prototype = Object.create( THREE.BufferGeometry.prototype );
THREE.FourspaceGeometry.prototype.constructor = THREE.FourspaceGeometry;

function applyMatrixToVec4Array( matrix, array ) {
  var v1 = new THREE.Vector4(),
      offset = 0,
      length = array.length;
  for ( var i = 0, j = offset; i < length; i += 4, j += 4 ) {
    v1.fromArray( array, j );
    v1.applyMatrix4( matrix );
    v1.toArray( array, j );
  }

  return array;
}

THREE.FourspaceGeometry.prototype.computeBoundingBox = function ( matrix ) {
  if ( this.boundingBox === null ) {
    this.boundingBox = new THREE.Box3();
  }
  var positions = this.attributes.position.array;

  if ( positions ) {
    var minX = + Infinity;
		var minY = + Infinity;
		var minZ = + Infinity;

		var maxX = - Infinity;
		var maxY = - Infinity;
		var maxZ = - Infinity;

		for ( var i = 0, il = array.length; i < il; i += 4 ) {

			var x = array[ i ];
			var y = array[ i + 1 ];
			var z = array[ i + 2 ];

			if ( x < minX ) minX = x;
			if ( y < minY ) minY = y;
			if ( z < minZ ) minZ = z;

			if ( x > maxX ) maxX = x;
			if ( y > maxY ) maxY = y;
			if ( z > maxZ ) maxZ = z;

		}

		this.boundingBox.min.set( minX, minY, minZ );
		this.boundingBox.max.set( maxX, maxY, maxZ );

  }

  if ( positions === undefined || positions.length === 0 ) {

    this.boundingBox.min.set( 0, 0, 0 );
    this.boundingBox.max.set( 0, 0, 0 );

  }

  if ( isNaN( this.boundingBox.min.x ) || isNaN( this.boundingBox.min.y ) || isNaN( this.boundingBox.min.z ) ) {

    console.error( 'THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this );

  }
};

THREE.FourspaceGeometry.prototype.applyMatrix = function ( matrix ) {
  var position = this.attributes.position;
  if ( position !== undefined ) {
    applyToVector4Array( matrix, position.array );
    position.needsUpdate = true;
  }

  var normal = this.attributes.normal;

  if ( normal !== undefined ) {

    var normalMatrix = new THREE.Matrix3().getNormalMatrix( matrix );

    normalMatrix.applyToVector3Array( normal.array );
    normal.needsUpdate = true;

  }

  if ( this.boundingBox !== null ) {

    this.computeBoundingBox();

  }

  if ( this.boundingSphere !== null ) {

    this.computeBoundingSphere();

  }
};

THREE.EventDispatcher.prototype.apply( THREE.FourspaceGeometry.prototype );
