function dropDown() {
	var dropContent = document.getElementById('dropContent');

	// when the user clicks on the button, toggle between hiding and displaying 
	if (dropContent.style.display === "block") {
		dropContent.style.display = "none";
	} else {
		dropContent.style.display = "block";
	}
}


window.onclick = function(event) {
	if (!event.target.matches('.dropBtn')) {
		var dropContent = document.getElementsByClassName('dropContent');
		var i;
		for (i = 0; i < dropContent.length; i++) {
			var drop = dropContent[i];
			if (drop.style.display === "block") {
				drop.style.display = "none";
			}
		}
	}
}