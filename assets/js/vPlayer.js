const playPause = document.querySelector("#play-pause")
const playMute = document.querySelector("#sound-toggler")
const videoBar = document.querySelector(".video-bar")
const video = document.querySelector("#myVideo")
const passedTime = document.querySelector(".passed")
const shareToggler = document.querySelector("#share-toggler")
const share = document.querySelector(".share")
const closeVideo = document.querySelector(".v-container .close-popup")

const videoBarHandler = (currentT, totalT) => {
  let width = (currentT / totalT * 100);
  passedTime.style.width = width + "%";
}

  // video play and pause
playPause.addEventListener('click', function() {
  let pPC = playPause.children[0].classList;

  if(video.paused) {
    pPC.value = "fas fa-pause";
    video.play();
  } else {
    pPC.value = "fas fa-play"
    video.pause();
  }

  setInterval(function() {
    videoBarHandler(video.currentTime, video.duration)
  }, 10)
})

  // video mute and play
playMute.addEventListener('click', function() {
  let pMC = playMute.children[0].classList;

  if(!video.muted) {
    video.muted = true
    pMC.value = "fas fa-volume-mute";
  } else {
    video.muted = false
    pMC.value = "fas fa-volume-up";
  }
})

  // skip through time
videoBar.addEventListener("click", function(e) {
  const rect = e.target.getBoundingClientRect()
  const x = e.clientX - rect.left;

  let width = (x * 100 / video.offsetWidth)
  let time = (width * video.duration) / 100

  video.currentTime = time
  passedTime.style.width = width + "%";
})

  // share video
shareToggler.addEventListener("click", function() {
  share.classList.toggle('show')
})

  // reset video
closeVideo.addEventListener("click", function() {
  video.currentTime = 0;
})