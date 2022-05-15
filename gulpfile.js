var box = document.getElementsByClassName("tab")
var buttons = document.getElementsByTagName("button")
var question = document.getElementsByClassName("question")

function playPause(btn) {
  var audio = btn.previousElementSibling
  
  if(audio.paused) {
    audio.play()
    btn.innerText = "▢"
  } else {
    audio.pause()
    btn.innerText = "♬"
  }
}

for (var x of box) {
    x.style.display = "none"
}

function changeHeader(event, id){
  
    for (var x of box) {
        x.style.display = "none"
        x.classList.remove("tabsAnimation")
    }

    for (var x of question) {
        x.style.display = "none"
    }
    
    
    document.getElementById(id).style.display = "block"

    setTimeout(function(){
        document.getElementById(id).classList.add("tabsAnimation")
    }, 100)

    
    for (var x of buttons) {
        x.classList.remove("selected")
    }

    event.currentTarget.classList.add("selected")

    document.getElementById("title").transitionDelay = "2s"
}


