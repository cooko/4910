function drawLine(start, finish){
    var material = new THREE.LineBasicMaterial({
        color: 0x0000ff
    });

    var geometry = new THREE.Geometry();
    geometry.vertices.push(start);
    geometry.vertices.push(finish);
    
    var line = new THREE.Line(geometry, material);

    return line;
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

    return line;
}
function drawAxis(){

	axis = new THREE.Object3D();

	axis.add(drawLine(new THREE.Vector3(0, 0, 0),new THREE.Vector3(100, 0, 0)));
	axis.add(drawLine(new THREE.Vector3(0, 0, 0),new THREE.Vector3(0, 100, 0)));
	axis.add(drawLine(new THREE.Vector3(0, 0, 0),new THREE.Vector3(0, 0, 100)));
	
	axis.add(drawDashedLine(new THREE.Vector3(0, 0, 0),new THREE.Vector3(-100, 0, 0)));
	axis.add(drawDashedLine(new THREE.Vector3(0, 0, 0),new THREE.Vector3(0, -100, 0)));
	axis.add(drawDashedLine(new THREE.Vector3(0, 0, 0),new THREE.Vector3(0, 0, -100)));

	scene.add(axis);
}
function drawLabels(){
	var textMaterial = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
	var x = new THREE.Mesh( buildTextGeometry("x"), textMaterial );
	var y = new THREE.Mesh( buildTextGeometry("y"), textMaterial );
	var z = new THREE.Mesh( buildTextGeometry("z"), textMaterial );

	x.position = new THREE.Vector3(100, 0, 0);
	y.position = new THREE.Vector3(0, 100, 0);
	z.position = new THREE.Vector3(0, 0, 100);
	
	labels = new THREE.Object3D();

	labels.add(x);
	labels.add(y);
	labels.add(z);

	scene.add(labels);

}
function drawPoint(){
	var geometry = new THREE.CubeGeometry(1,1,1);
	var material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
	var point = new THREE.Mesh( geometry, material );
	return point;
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
    camera.position.set(150, 150, 150);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    scene = new THREE.Scene();
	controls = new THREE.OrbitControls( camera, renderer.domElement );

	drawAxis();
	drawLabels();
}

function render() {
	requestAnimationFrame(render);
	labels.children[0].lookAt( camera.position );
	labels.children[1].lookAt( camera.position );
	labels.children[2].lookAt( camera.position );



	renderer.render(scene, camera);
}