NoWebGL is a debug library for WebGL. 
In short, it declares all WebGL functions as dummy.
Its purpose is to rule out WebGL performance when you optimize, and thus see more clearly the effect of your javascript.

This is directly inpired from [firebugx](http://code.google.com/p/fbug/source/browse/branches/firebug1.2/lite/firebugx.js)

instead of the usual

```
    var gl = domElement.getContext('experimental-webgl');
```

Do the following

```
    var gl = NoWebGL.getContext();
```
**Note** This is super early work. pull request are welcomed
