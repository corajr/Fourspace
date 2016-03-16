THREE.TesseractGeometry = function () {
  THREE.FourspaceGeometry.call( this );

  this.type = 'TesseractGeometry';
  var coordinates = [
    [-1, -1, -1, -1],
    [-1, -1, -1, 1],
    [-1, -1, 1, -1],
    [-1, -1, 1, 1],
    [-1, 1, -1, -1],
    [-1, 1, -1, 1],
    [-1, 1, 1, -1],
    [-1, 1, 1, 1],
    [1, -1, -1, -1],
    [1, -1, -1, 1],
    [1, -1, 1, -1],
    [1, -1, 1, 1],
    [1, 1, -1, -1],
    [1, 1, -1, 1],
    [1, 1, 1, -1],
    [1, 1, 1, 1]
  ];
  var vertices = new Float32Array( coordinates.length * 4 );
  for ( var i = 0; i < coordinates.length; i++ ) {
	  vertices[ i*4 + 0 ] = coordinates[i][0];
	  vertices[ i*4 + 1 ] = coordinates[i][1];
	  vertices[ i*4 + 2 ] = coordinates[i][2];
	  vertices[ i*4 + 3 ] = coordinates[i][3];
  }

  this.addAttribute( 'position', new THREE.BufferAttribute( vertices, 4 ) );

}

THREE.TesseractGeometry.prototype = Object.create( THREE.FourspaceGeometry.prototype );
THREE.TesseractGeometry.prototype.constructor = THREE.TesseractGeometry;

THREE.EventDispatcher.prototype.apply( THREE.TesseractGeometry.prototype );
