function startClock() {
    var year = document.getElementById("year");
    var month = document.getElementById("month");
    var day = document.getElementById("day");
    var week = document.getElementById("week");
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    var ampm = document.getElementById("ampm");
    var ampmStr = "";
  
    var date = new Date();
    var yyyy = date.getFullYear();
    var mm = date.getMonth() + 1;
    var dd = date.getDate();
    var dayOfWeek = date.getDay();
    var dayOfWeekStr = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ][dayOfWeek];
    var hh = date.getHours();
    if(hh >= 12) {
      hh = hh - 12;
      ampmStr = "PM";
    }
    else {
      ampmStr = "AM";
    }
    var min = date.getMinutes();
    var sec = date.getSeconds();
  
    year.innerHTML = yyyy;
    month.innerHTML = ("0" + mm).slice(-2);
    day.innerHTML = ("0" + dd).slice(-2);
    week.innerHTML = dayOfWeekStr;
    hours.innerHTML = ("0" + hh).slice(-2);
    minutes.innerHTML = ("0" + min).slice(-2);
    seconds.innerHTML = ("0" + sec).slice(-2);
    ampm.innerHTML = ampmStr;
  }
  
  window.addEventListener('load', (event) => {
    setInterval(startClock, 1000);
  });