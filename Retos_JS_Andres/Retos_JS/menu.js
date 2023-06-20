function redirect() {
    var reto = document.getElementById("reto").value;
  
    switch (reto) {
      case "reto1":
        window.location.href = "reto1/index2.html"; 
        break;
        case "reto2":
            window.location.href = "reto2/index5.html"; 
            break;
      case "reto3":
        window.location.href = "reto3/index3.html"; 
        break;
      case "reto4":
        window.location.href = "reto4/index4.html"; 
        break;
      case "reto5":
        window.location.href = "reto5/index5.html";
        break;
        case "reto6":
          window.location.href = "reto6/index6.html";
          break;
        case "reto7":
          window.location.href = "reto7/index7.html";
          break;
      default:
        alert("Opción de reto inválida");
        break;
    }
  }
  