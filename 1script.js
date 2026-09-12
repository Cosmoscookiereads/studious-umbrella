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


  


        
     </div>
