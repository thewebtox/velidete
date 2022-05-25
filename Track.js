




function htmlbody() {
    setInterval(function () {
      if (!$("#htmlbody").length) {
        window.location.href = "https://google.com/";
      }
    },
      1000)
  };
htmlbody();
