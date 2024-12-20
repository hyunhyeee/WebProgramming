let count = 0;
let timerID = null;

onmessage = function (e) {
  if (e.data == "start") {
    if (timerID != null) return;
    timerID = this.setInterval(myCallback, 1000);
  }
  else if (e.data == "stop") {
    if (timerID == null) return;
    clearInterval(timerID);
    close();
  }
}

function myCallback() {
  count++;
  postMessage(count);
}