(function(global){
	
var NoWebGL	= {};
global.NoWebGL	= NoWebGL;

NoWebGL.Context	= {}

NoWebGL.Fct	= {}
NoWebGL.Fct.undefinedList	= [
	'enable',
	'clearColor',
	'depthFunc',
	'blendEquationSeparate',
	'blendFuncSeparate',
	'viewport',
	'clear',
	
	'deleteTexture',
	
	'bindTexture',
	'activeTexture',
	
	'texImage2D',
	'texParameteri',
	'uniform1i',
	
	
	'bindBuffer',
	'bufferData',
	'vertexAttribPointer',
	'drawElements',
	
	'shaderSource',
	'compileShader',
	'attachShader',
	'linkProgram',
	'useProgram',
	'enableVertexAttribArray'
];

NoWebGL.Fct.trueList	= [
	'getShaderParameter',
	'getProgramParameter',
];
NoWebGL.Fct.objList	= [
	'createShader',
	'createProgram',
	'createTexture',
	'createBuffer',
	'getAttribLocation',
	'getUniformLocation',
];

// list of constant that need to be set
NoWebGL.Fct.constantList	= [
	'FRAGMENT_SHADER',
	'VERTEX_SHADER',
];

NoWebGL.Fct.returnUndefined	= function(){ return undefined;	}
NoWebGL.Fct.returnTrue		= function(){ return true;	}
NoWebGL.Fct.returnObject	= function(){ return {};	}

NoWebGL.Fct.constantList.forEach(function(method){
	NoWebGL.Context[method]	= 1;
});
NoWebGL.Fct.undefinedList.forEach(function(method){
	NoWebGL.Context[method]	= NoWebGL.Fct.returnUndefined;
});
NoWebGL.Fct.trueList.forEach(function(method){
	NoWebGL.Context[method]	= NoWebGL.Fct.returnTrue;
});
NoWebGL.Fct.objList.forEach(function(method){
	NoWebGL.Context[method]	= NoWebGL.Fct.returnObject;
});

})(this);
