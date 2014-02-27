function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
  renderer = new THREE.WebGLRenderer();
  controls = new THREE.OrbitControls(camera, renderer.domElement);

  camera.position.set(150, 150, 150);
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
}
function render() {
  requestAnimationFrame(render);
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

  this.xplane.rotation.x = Math.PI/2;
  this.yplane.rotation.z = Math.PI/2;

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