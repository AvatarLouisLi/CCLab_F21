var video = document.getElementById("video_background");
video.addEventListener("canplay", function() {
  setTimeout(function() {
    video.play();
  }, 1000);});

setTimeout(function() {
    let link = document.getElementById("video_background");
    link.style.opacity= "0";
}, 20000);

setTimeout(function() {
   let link = document.getElementById("c1");
   link.style.display="block";
}, 23000);

setTimeout(function() {
   let link = document.getElementById("c2");
   link.style.display="block";
}, 24000);

setTimeout(function() {
   let link = document.getElementById("b1");
   link.style.display="block";
}, 21000);
