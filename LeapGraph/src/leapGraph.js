function drawLine(start, finish){
    var material = new THREE.LineBasicMaterial({
        color: 0x0000ff
    });

    var geometry = new THREE.Geometry();
    geometry.vertices.push(start);
    geometry.vertices.push(finish);
    
    var line = new THREE.Line(geometry, material);
    scene.add(line);

}
function drawDashedLine(start, finish){
    var material = new THREE.LineDashedMaterial({
        color: 0x0000ff,
        dashSize: 1,
        gapSize: 0.5
    });

    var geometry = new THREE.Geometry();
    geometry.vertices.push(start);
    geometry.vertices.push(finish);
    
    geometry.computeLineDistances(); // This one is SUPER important, otherwise dashed lines will appear as simple plain lines

    var line = new THREE.Line(geometry, material);
    scene.add(line);

}
function drawPoint(){
	var geometry = new THREE.CubeGeometry(1,1,1);
	var material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
	var point = new THREE.Mesh( geometry, material );
	scene.add( point );
}
function buildTextGeometry(letter){
	var text3d = new THREE.TextGeometry( letter, {
		size: 1,
		height: 1,
		depth: 0.5,
		curveSegments: 2,
		font: "helvetiker"
	});
	return text3d;
}
function initScene(){
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
    camera.position.set(25, 25, 30);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    scene = new THREE.Scene();
	controls = new THREE.OrbitControls( camera, renderer.domElement );
}

function render() {
	requestAnimationFrame(render);
	x.lookAt( camera.position );
	y.lookAt( camera.position );
	z.lookAt( camera.position );

	renderer.render(scene, camera);
}