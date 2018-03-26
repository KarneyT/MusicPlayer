var player;
var rngVolume;
var intv;

window.onload = function(){
document.addEventListener('deviceready', init, false);
}

function init()
{
	player = document.getElementById('player');
	var btnPlay = document.getElementById('btnPlay');
	var btnPause = document.getElementById('btnPause');
	var btnStop = document.getElementById('btnStop');
	rngVolume = document. getElementById('rngVolume');
	
	btnPlay.addEventListener ('click', playMusic, false);
	btnPause.addEventListener('click', pauseMusic, false);
	btnStop.addEventListener('click', stopMusic, false);
	}
	
function playMusic()
{
player.play();
startTimer();
}

function pauseMusic()
{
player.pause();
}

function stopMusic()
{
pauseMusic();
player.currentTime = 0;
stopTimer();
}

function changeVolume()
{
player.volume = rngVolume.value;
}

function changeSong(song)
{
stopMusic();
player.src = "assets/" + song + ".mp3";
playMusic();
}

function startTimer()
{
intv = setInterval(updateTime, 1000);
}

function stopTimer()
{
clearInterval(intv);
updateTime();
}
function updateTime()
{
document.getElementById('timeOut').innerHTML = "Elapsed Time: " + secsToMins(player.currentTime);
}

function secsToMins(seconds)
{
var minutes = Math.floor(seconds/60);
	var theSeconds = seconds - minutes * 60;
		if(theSeconds > 9)
		{
			return minutes + ":" + Math.round(theSeconds);
			} else
			{
				return minutes + ":0" + Math.round(theSeconds);
				}
			}
			
function secsToMins(seconds)
{
var minutes = Math.floor(seconds/60);
var theSeconds = seconds - minutes * 60;
	if(theSeconds > 9)
	{
		return minutes + ":" + Math.round(theSeconds);
		} else
		{
			return minutes + ":0" + Math.round(theSeconds);
			}
		}