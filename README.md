NoWebGL is a library to help benchmarking your WebGL demo.
In short, it declares all WebGL functions as dummy,
so you can measure more accuratly the time taken by the rest e.g. javascript.

Its purpose is to rule out WebGL performance when you optimize, and thus
see more clearly the effect of your javascript.
This isnt foolproof, mainly because the dummy functions are real dummy.
If your code is doing a lot of ```gl.get*``` and is expecting real results, it may cause trouble.

This is directly inpired from [firebugx](http://code.google.com/p/fbug/source/browse/branches/firebug1.2/lite/firebugx.js).
There is a [learningwebgl.com](http://learningwebgl.com/blog/?p=28) lesson as example.
This is early work. suggestions and/or pull request are welcomed.

## Let's include it

```
    <script src="nowebgl.js"></script>
```

## Let's use it

It is quite simple really. To instanciate a context, just do 

```
    var gl = NoWebGL.getContext();
```

Instead of the usual ```domElement.getContext('experimental-webgl');```

