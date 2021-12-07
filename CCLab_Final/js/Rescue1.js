var video = document.getElementById("video_background");
video.addEventListener("canplay", function() {
  setTimeout(function() {
    video.play();
  }, 1000);});
setTimeout(function() {
      let link = document.getElementById("video_background");
      link.style.opacity= "0";
  }, 25000);
setTimeout(function() {
   let link = document.getElementById("b1");
   link.style.display="block";
}, 27000);
setTimeout(function() {
   let link = document.getElementById("c1");
   link.style.display="block";
}, 29000);
setTimeout(function() {
   let link = document.getElementById("c2");
   link.style.display="block";
}, 31000);
setTimeout(function() {
   let link = document.getElementById("c3");
   link.style.display="block";
}, 33000);
