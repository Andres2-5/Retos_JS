function determineTriangleType() {
    var side1 = parseFloat(document.getElementById("side1").value);
    var side2 = parseFloat(document.getElementById("side2").value);
    var side3 = parseFloat(document.getElementById("side3").value);
  
    if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
      alert("Por favor, ingresa valores numéricos para los lados del triángulo.");
      return;
    }
  
    if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
      alert("Los lados del triángulo deben ser mayores que cero.");
      return;
    }
  
    if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
      alert("Estos lados no forman un triángulo válido.");
      return;
    }
  
    if (side1 === side2 && side2 === side3) {
      alert("Es un triángulo equilátero.");
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
      alert("Es un triángulo isósceles.");
    } else {
      alert("Es un triángulo escaleno.");
    }
  }
  