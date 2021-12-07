var video = document.getElementById("video_background");
video.addEventListener("canplay", function() {
  setTimeout(function() {
    video.play();
  }, 1000);});

setTimeout(function() {
    let link = document.getElementById("video_background");
    link.style.opacity= "0";
}, 9500);

setTimeout(function() {
   let link = document.getElementById("b1");
   link.style.display="block";
}, 11500);

setTimeout(function() {
   let link = document.getElementById("b2");
   link.style.display="block";
}, 13000);

setTimeout(function() {
   let link = document.getElementById("c1");
   link.style.display="block";
}, 14500);

setTimeout(function() {
   let link = document.getElementById("c2");
   link.style.display="block";
}, 17500);

setTimeout(function() {
   let link = document.getElementById("c3");
   link.style.display="block";
}, 16000);
