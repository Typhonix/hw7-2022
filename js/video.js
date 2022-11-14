var video = document.querySelector("#player1");
var volume = document.querySelector("#volume");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	console.log("Auto play is set to false");
	console.log("Loop is set to false");
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	volume.textContent = document.querySelector("#slider").value + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate = video.playbackRate * 0.9;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up Video");
	video.playbackRate = video.playbackRate / 0.9;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	video.currentTime += 10;
	if (video.currentTime == video.duration) {
		video.currentTime = 0;
	}
	console.log("Video current time is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	var button = document.querySelector("#mute");
	if (button.textContent == "Mute") {
		console.log("Mute");
		button.textContent = "Unmute";
		video.muted = true;
	}
	else {
		console.log("Unmute");
		button.textContent = "Mute";
		video.muted = false;
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	volume.textContent = document.querySelector("#slider").value + "%";
	video.volume = document.querySelector("#slider").value / 100;
	console.log("The current value is " + video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});