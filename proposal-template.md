# ECMAScript proposal: Package
- [Motivation](#motivation)
- [High-level API](#high-level-api)
- [FAQ](#faq)

## Motivation

С багами npm и yarn уже невозможно жить, и вообще это лишние звено.
Все используют какие-то библиотеке, в такой ситуации логично что язык должен взять на себя это бремя. Было круто указывать ссылку на гитхаб с библиотекой и использовать ее сразу. А не как сейчас перейти в консоль, запустить npm/yarn, ждать, пересобирать и только сейчас использовать!

Это нововведение значительно ускорит разработку!

## High-level API

```js
// example code
package 'https://github.com/mrdoob/three.js' // default package
package THREE_OTHER 'https://github.com/mrdoob/three.js' // name package

camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
camera.position.z = 1;

scene = new THREE.Scene();

geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
material = new THREE.MeshNormalMaterial();

mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
```

### FAQ
#### Question

Answer
