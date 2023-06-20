function processChoice() {
    var word = document.getElementById("word").value;
    var option = document.getElementById("options").value;
    var result;
  
    switch (option) {
      case "length":
        result = word.length;
        break;
      case "uppercase":
        result = word.toUpperCase();
        break;
      case "lowercase":
        result = word.toLowerCase();
        break;
      case "firstCharacter":
        result = word.charAt(0);
        break;
      default:
        result = "Opción inválida";
    }
  
    alert(result);
  }
  