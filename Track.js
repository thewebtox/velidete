
  $(document).ready(function () {
    $("#mycredit2").css("display", "inline-block").html('Created by <i style="color:rgb(243,21,40);" class="fa fa-heart"></i> <a href="#">Deepak parashari</a>');
    setInterval(function () {
      if (!$("#mycredit2:visible").length) {
        window.location.href = "https://google.com"
      }
    },
      3000)
  })



document.addEventListener("DOMContentLoaded",function () {
  let e = window.location.href;
  e.indexOf("tempsol.in") + 1 == 0 &&
  setTimeout(function () {
  document.getElementsByTagName("body")[0].innerHTML =
  '<div style="margin:50% auto;width:100%;text-align:center"><h1 style="font-size:50px; color: rgb(255,33,33)">Great! You like this Code!</h1><div style="font-size:30px; color: rgb(255,33,33)"><a href="https://digitaltox.in" style="color: rgb(203,0,0)">Please purchase it</a> if you\`d like to use it further</div> <p style="color: rgb(255,33,33)">or delete my tracking code if you wan\`t to get rid of this message and use it illegally :(</p></div>';
  }, 1e4);
  });
