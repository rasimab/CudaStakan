
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
   $("#navbar").css("background-color", "rgb(8, 8, 8)");
  } 
  else {
    $("#navbar").css("background-color", "rgba(0, 0, 0, 0)");
   } 
  
 
}