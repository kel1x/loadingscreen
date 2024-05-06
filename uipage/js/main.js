function loadProgress(progress) {
	$(".load-bar-y").css("width", progress + "%");
}

var music = document.getElementById("music");
music.volume = 0.1; // 10% volume

window.addEventListener('message', function(e) {
	if (e.data.eventName === 'loadProgress') {
		loadProgress(parseInt(e.data.loadFraction * 100));
	}
});

document.getElementById("name-top").textContent = Config.TopText;
document.getElementById("name-bottem").textContent = Config.BottemText;

const hexContainer = document.getElementById('hexContainer');
Config.socailmedia.forEach(item => {
	const hexa = document.createElement('div');
	hexa.className = 'hexa';
	hexa.style.backgroundColor = item.color;

	const hexLogo = document.createElement('img');
	hexLogo.src = item.logo;
	hexLogo.alt = 'Logo';
	hexLogo.className = 'hex-logo';

	hexa.appendChild(hexLogo);
	hexContainer.appendChild(hexa);

	hexa.addEventListener('click', () => {
		window.invokeNative("openUrl", item.url);
	});
});

function createBackgroundVideo() {
	var container = document.getElementById('backgroundVideoContainer');

	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}
{

		var video = document.createElement('video');
		video.autoplay = true;
		video.loop = true;
		video.muted = true;
		video.loading = 'lazy';
		video.classList.add('videos');

		var source = document.createElement('source');
		source.src = Config.backgroundvideocfg.videoSrc;
		source.type = 'video/webm';

		video.appendChild(source);
		container.appendChild(video);
	}
}

createBackgroundVideo();