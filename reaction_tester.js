  //get the number of ms since 01/01/1970
  function generateRandomNumber(min, max) {
  	return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var totalTime = new Date().getTime();
  var start = new Date().getTime();
  timeArray = [];

  function generateRandomShape() {

  	var attributes = ["margin-top", "margin-bottom", "margin-left",
                      "margin-right", "background-color", "border-radius",
                      "height", "width"];

  	for (var i = 0; i < attributes.length; i++) {
  		if (attributes[i] === "background-color") {
  			document.getElementById('shape').style[attributes[i]] =
  				"rgba(" + generateRandomNumber(0, 255).toString() +
  				", " + generateRandomNumber(0, 255).toString() +
  				", " + generateRandomNumber(0, 255).toString() + ", 1)";
  		} else if (attributes[i] === "border-radius") {
  			document.getElementById('shape').style[attributes[i]] =
  				generateRandomNumber(0, 100).toString() + "%";
  		} else {
  			document.getElementById('shape').style[attributes[i]] =
  				generateRandomNumber(10, 100).toString() + "px";
  		}
  	}
  	start = new Date().getTime();
  }

  document.getElementById('shape').addEventListener('click', function() {
  	var end = new Date().getTime();
  	var timeTaken = (end - start) / 1000;
  	timePlaying = (end - totalTime) / 1000;
  	document.getElementById('timeSinceLastClick').innerHTML = "Time Taken: " + timeTaken.toString() + " seconds.";
  	document.getElementById('totalTime').innerHTML = "Total Time Taken: " + timePlaying.toString() + " seconds.";
  	generateRandomShape();
  });

  document.addEventListener('load', generateRandomShape());