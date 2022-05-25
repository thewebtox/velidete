$(document).ready(function () {
    
    setInterval(function () {
      if (!$("#htmlbody").length) {
        window.location.href = "https://google.com/";
      }
    },
      9000)
  });
