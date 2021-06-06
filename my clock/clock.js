function startTime() {
  const today = new Date();
  var date = today.getDate;
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var year = today.getFullYear();
  var month = today.toLocaleString("default", { month: "long" });
  var day = today.getDate();
  var am_pm = dayOrNight(h);
  h = actualHour(h);
  m = checkTime(m);
  s = checkTime(s);

  document.getElementById("date").innerHTML = month + " " + day + ", " + year;
  document.getElementById("txt").innerHTML =
    h + ":" + m + ":" + s + "  " + am_pm;
  var t = setTimeout(startTime, 1000);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

function actualHour(h) {
  if (h > 12) {
    h -= 12;
    return h;
  }
}

function dayOrNight(h) {
  if (h >= 11) {
    am_pm = "PM";
    return am_pm;
  } else {
    am_pm = "AM";
    return am_pm;
  }
}
