
// for checkBox agree
function agreeFunction() {
    var checkBox = document.getElementById("agree");
    // Get the output text
    var text = document.getElementById("text");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.opacity = "1";
    } else {
      text.style.opacity = "0";
    }
  }