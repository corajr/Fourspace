THREE.FourspaceShader = {
	'depth': {

		uniforms: {
			"mNear": { type: "f", value: 1.0 },
			"mFar" : { type: "f", value: 2000.0 },
			"opacity" : { type: "f", value: 1.0 },
      "fourFrom": { type: "v4", value: new THREE.Vector4(1,1,1,1) },
      "fourMat": { type: "m4v", value: [] },
      "fourRadius": { type: "f", value: 1.0 },
		},

		vertexShader: [
      'precision highp float;',
      'uniform mat4 modelMatrix;',
			'uniform mat4 modelViewMatrix;',
			'uniform mat4 projectionMatrix;',
			'uniform mat4 viewMatrix;',
			'uniform mat3 normalMatrix;',
			'uniform vec3 cameraPosition;',

      'uniform vec4 fourFrom;',
      'uniform mat4 fourMat;',
      'uniform float fourRadius;',

			'attribute vec4 position;',
			'attribute vec3 normal;',
			'attribute vec2 uv;',


			THREE.ShaderChunk[ "common" ],
			THREE.ShaderChunk[ "morphtarget_pars_vertex" ],
			THREE.ShaderChunk[ "logdepthbuf_pars_vertex" ],

			"void main() {",
        "vec3 transformed = ((position - fourFrom) * fourMat).xyz / fourRadius;",

				THREE.ShaderChunk[ "morphtarget_vertex" ],
				THREE.ShaderChunk[ "project_vertex" ],
				THREE.ShaderChunk[ "logdepthbuf_vertex" ],

			"}"

		].join( "\n" ),

		fragmentShader: [
      'precision highp float;',

			"uniform float mNear;",
			"uniform float mFar;",
			"uniform float opacity;",
      'uniform mat4 viewMatrix;',
			'uniform vec3 cameraPosition;',


			THREE.ShaderChunk[ "common" ],
			THREE.ShaderChunk[ "logdepthbuf_pars_fragment" ],

			"void main() {",

				THREE.ShaderChunk[ "logdepthbuf_fragment" ],

			"	#ifdef USE_LOGDEPTHBUF_EXT",

			"		float depth = gl_FragDepthEXT / gl_FragCoord.w;",

			"	#else",

			"		float depth = gl_FragCoord.z / gl_FragCoord.w;",

			"	#endif",

			"	float color = 1.0 - smoothstep( mNear, mFar, depth );",
			"	gl_FragColor = vec4( vec3( color ), opacity );",

			"}"

		].join( "\n" )
	},
};
