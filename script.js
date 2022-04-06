var audio_A = document.getElementById("audio_A");
var audio_B = document.getElementById("audio_B");

audio_B.volume = 0;

var isKeyHolding = false;

document.addEventListener('keydown', checkKeyDown, false);
document.addEventListener('keyup', checkKeyUp, false);

function checkKeyDown(e)
{
    if(e.keyCode == 32 && !isKeyHolding) // SPACE
    {
        audio_switch();
        isKeyHolding = true;
    }
    else if(e.keyCode == 70) // F
    {
        audio_play_pause();
    }
    else if(e.keyCode == 83) // S
    {
        audio_stop();
    }
}

function checkKeyUp(e)
{
    if(e.keyCode == 32) // SPACE
    {
        audio_switch();
        isKeyHolding = false;
    }
}

function audio_play_pause()
{
    if (audio_A.paused)
    {
        audio_A.play();
        audio_B.play();
    }
    else
    {
        audio_A.pause();
        audio_B.pause();
    }
}

function audio_switch()
{
    if(audio_B.volume == 0)
    {
        audio_B.volume = 1;
        audio_A.volume = 0;
    }
    else
    {
        audio_B.volume = 0;
        audio_A.volume = 1;
    }
}

function audio_stop()
{
    audio_A.pause();
    audio_B.pause();
    audio_A.currentTime = 0;
    audio_B.currentTime = 0;
}