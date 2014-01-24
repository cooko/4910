function initLeap(){
    controller = new Leap.Controller();
    controller.on( 'frame' , function(frame){
    	if(frame.hands.length > 0){
    		hand = frame.hands[0].pamlPosition;
renderer.render(scene, camera);
    	}
    });
}