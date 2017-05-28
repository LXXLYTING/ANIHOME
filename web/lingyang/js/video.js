

// var mask = document.createElement("div");
// mask.className = 'mask';
// mask.style.display = 'none';
// mask.style.zIndex = '1200';
// mask.style.position = 'fixed';
// mask.style.top = '0';
// mask.style.width = '100%';
// mask.style.height = '100%';
// mask.style.backgroundColor = 'rgba(0,0,0,.3)';
// mask.style.alignItems = 'center';
// mask.style.justifyContent = 'center';


// var video_container = document.createElement("div");
// video_container.className = 'video_container';
// video_container.style.width = '800px';
// video_container.style.height = '450px';
// video_container.style.backgroundColor = 'rgba(0,0,0,1)';



// var video = document.createElement("video");
// video.className = 'video';
// video.setAttribute('controls','controls');
// video.setAttribute('autoplay','autoplay');
// video.src = '';
// video.width = video_container.style.width.split('p')[0];
// video.height = video_container.style.height.split('p')[0];


// video_container.appendChild(video);
// mask.appendChild(video_container);
// document.body.appendChild(mask);

var mask = document.getElementsByClassName('mask')[0];
var video = document.getElementsByClassName('video')[0];
var video_container = document.getElementsByClassName('video_container')[0];
var close_button = document.getElementsByClassName('close_button')[0];

var video_button = document.getElementsByClassName('video_button');

for (var i = video_button.length - 1; i >= 0; i--) {
	video_button[i].addEventListener('click',function(e){
		event = window.event||e;
		event.stopPropagation();
		// event.preventDefault();
		console.log('666');
		var src = this.getAttribute("src");
		show_video(src);
	})
}
close_button.addEventListener('click',function () {
	hide_video();
});





function show_video(src) {
	console.log(mask);
	video.src = src;
	document.getElementsByClassName('mask')[0].style.display="flex";
	console.log(mask.style.display);
}
function hide_video() {
	video.src = "";
	mask.style.display = 'none';
}