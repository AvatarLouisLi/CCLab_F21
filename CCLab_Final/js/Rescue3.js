var video = document.getElementById("video_background1");
video.addEventListener("canplay", function() {
  setTimeout(function() {
    video.play();
  }, 1000);});

setTimeout(function() {
   let link = document.getElementById("abc");
   link.style.display="block";
}, 68000);

setTimeout(function() {
    let link = document.getElementById("video_background1");
    link.style.opacity= "0";
}, 30000);
