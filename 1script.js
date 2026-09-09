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

        
     </div>
