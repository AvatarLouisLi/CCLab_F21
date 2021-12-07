var video = document.getElementById("video_background");
video.addEventListener("canplay", function() {
  setTimeout(function() {
    video.play();
  }, 1000);});
setTimeout(function() {
      let link = document.getElementById("video_background");
      link.style.opacity= "0";
  }, 30000);
setTimeout(function() {
   let link = document.getElementById("b1");
   link.style.display="block";
}, 31000);

setTimeout(function() {
   let link = document.getElementById("b2");
   link.style.display="block";
}, 34000);

setTimeout(function() {
   let link = document.getElementById("b3");
   link.style.display="block";
}, 37000);

setTimeout(function() {
   let link = document.getElementById("b4");
   link.style.display="block";
}, 40000);

setTimeout(function() {
   let link = document.getElementById("b5");
   link.style.display="block";
}, 43000);

setTimeout(function() {
   let link = document.getElementById("b6");
   link.style.display="block";
}, 46000);

setTimeout(function() {
   let link = document.getElementById("c1");
   link.style.display="block";
}, 48000);

setTimeout(function() {
   let link = document.getElementById("c2");
   link.style.display="block";
}, 50000);
