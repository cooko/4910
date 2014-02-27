function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  renderer = new THREE.WebGLRenderer();

  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
}
function render() {
  requestAnimationFrame(render);

  grid.draw();

  renderer.render(scene, camera);
}
function grid(length, width, height){
  this.length = length;
  this.width = width;
  this.height = height;

  this.xplane = new THREE.GridHelper( width, 1 );
  this.yplane = new THREE.GridHelper( height, 1 );
  this.zplane = new THREE.GridHelper( length, 1 );

  this.xplane.position = new THREE.Vector3( 0, 0, 0 );
  this.yplane.position = new THREE.Vector3( 0, 0, 0 );
  this.zplane.position = new THREE.Vector3( 0, 0, 0 );

  this.draw = draw;
  function draw(){
    scene.add(this.xplane);
    scene.add(this.yplane);
    scene.add(this.zplane);
  }
  function updateGrid(){
    this.xplane.size = this.width ;
    this.yplane.size = this.height ;
    this.zplane.size = this.length ;
  }
}