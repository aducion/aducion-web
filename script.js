/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function nav() {
  var x = document.getElementById("myTopnav");

  if (x.className === "topnav") {
    x.className += " responsive";
    x.style.backgroundColor="var(--light-black)";
  } else {
    x.className = "topnav";
    x.style.backgroundColor="var(--main-color)";
  }
}

function typeWriter(text, elementId, delay) {
    let i = 0;
    const targetElement = document.getElementById(elementId);
    targetElement.innerHTML = "";
  
    function type() {
      if (i < text.length) {
        targetElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, delay);
      }
    }
  
    type();
  }
  typeWriter(`Estamos en mantenimiento temporal.`, "autoText", 40);
  


