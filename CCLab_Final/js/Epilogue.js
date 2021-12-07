var video = document.getElementById("video_background");
video.addEventListener("canplay", function() {
  setTimeout(function() {
    video.play();
  }, 1000);});

setTimeout(function() {
    let link = document.getElementById("video_background");
    link.style.opacity= "0";
}, 90000);

setTimeout(function() {
   let link = document.getElementById("abc");
   link.style.display="block";
}, 91000);
