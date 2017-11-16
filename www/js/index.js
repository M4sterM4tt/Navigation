// Lifecycle Test

// Variables defined
var launched_count = 0; // Counts amount of times application is launched
var paused_count =0; // Counts amount of times application is paused
var resumed_count = 0; // Counts amount of times application is resumed

// Event Listener defined. When device is ready, run function "onDeviceReady", Begins on False
document.addEventListener("deviceready", onDeviceReady, false);
		
// This function contains the display info.
function updateDisplay() {
// Displays Application Launched: "The launch count" as id="launched"
	$("#launched").text("Application launched: " + launched_count);
// Displays Application Paused: "The pause count" as id="resumed"
	$("#resumed").text("Application paused: " + paused_count);
// Displays Application Resumed: "The resumed count" as id="paused"
	$("#paused").text("Application resumed: " + resumed_count);
}

// device APIs are available

// Function which is run when deviceready
    function onDeviceReady() {
	
	// Event Listener defined. When device is resumed, run function "onResume", Begins on False
	document.addEventListener("resume", onResume, false);
	// Event Listener defined. When device is paused, run function "onPause", Begins on False
	document.addEventListener("pause", onPause, false);
	
	// Increase Launched Count by 1.
	launched_count++;
	// Run updateDisplay Function
	updateDisplay();
	    
	console.log("device ready");
    }

// Function which is run when paused
    function onPause() {
		
	// Increase Paused Count by 1.
	paused_count++;
	// Run updateDisplay Function
	updateDisplay();
	// Displays pause  
	console.log("pause");
    }
	
// Function which is run when resumed
    function onResume() {
	
	// Increase Resumed Count by 1.	
	resumed_count++;
	// Run updateDisplay Function
	updateDisplay();
	// Displays resume   
	console.log("resume");
    }