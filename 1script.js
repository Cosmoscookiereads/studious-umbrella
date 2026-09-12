dragElement(document.getElementById("welcome aboard the dreamy express!"));
function dragElement(element) {
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;
   if (document.getElementById(element.id + "header")) {
        document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
        initialX = e.clientX;
    initialY = e.clientY;
        document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }
    function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
        currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
        element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }
    function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


<div>
       <p> Clock </p>

       <script>
       <p> Conductor's pocket stopwatch </p>
       

          var Next,Departure = new Date().toLocalString();
     function updateTime() {
      var currentTime = new Date().toLocaleString();
      var timeText = document.querySelector("#timeElement");
      timeText.innerHTML = currentTime; 

    setInterval(updateTime, 1000); }


       </script>

               <img src="https://64.media.tumblr.com/ea7b8d568d6b7096dcad3fdb914f8b35/e897e556bedb879b-4f/s2048x3072/4a6d6da4abd74fae4f030ad38873d6147a682b93.pnj" width="170" height="170" alt="img" id="img">
        <script type="text/javascript">
          const img = document.getElementbyId("img")
          let n = 0 
          function tick () { 
            n+= 1
            img.style.transform='rotate(${n}deg)'
          }
          setInternal(tick, 1000 / 60)
        </script>

       <script>

        object.onclick = function(@keyframes spin){@keyframes spin};
       </script>

        
     </div>
