var video = document.getElementById("video_background");
video.addEventListener("canplay", function() {
  setTimeout(function() {
    video.play();
  }, 44000);});

setTimeout(function() {
   let link = document.getElementById("abc");
   link.style.display="block";
}, 86000);
