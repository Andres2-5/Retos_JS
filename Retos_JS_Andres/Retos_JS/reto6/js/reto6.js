function openModal(figure) {
    var modal = document.getElementById(figure + "Modal");
    modal.style.display = "block";
  }

  function closeModal(figure) {
    var modal = document.getElementById(figure + "Modal");
    modal.style.display = "none";
  }

  function calculateCircle() {
    var radius = parseFloat(document.getElementById("circleRadius").value);

    if (isNaN(radius)) {
      alert("Por favor, ingresa un número válido para el radio.");
      return;
    }

    var area = Math.PI * radius * radius;
    var perimeter = 2 * Math.PI * radius;

    document.getElementById("circleResult").innerHTML =
      "Área: " + area.toFixed(2) + "<br>Perímetro: " + perimeter.toFixed(2);
  }

  function calculateTriangle() {
    var base = parseFloat(document.getElementById("triangleBase").value);
    var height = parseFloat(document.getElementById("triangleHeight").value);

    if (isNaN(base) || isNaN(height)) {
      alert("Por favor, ingresa números válidos para la base y la altura.");
      return;
    }

    var area = 0.5 * base * height;
    var perimeter = base + 2 * Math.sqrt(base * base + height * height);

    document.getElementById("triangleResult").innerHTML =
      "Área: " + area.toFixed(2) + "<br>Perímetro: " + perimeter.toFixed(2);
  }

  function calculateRectangle() {
    var base = parseFloat(document.getElementById("rectangleBase").value);
    var height = parseFloat(document.getElementById("rectangleHeight").value);

    if (isNaN(base) || isNaN(height)) {
      alert("Por favor, ingresa números válidos para la base y la altura.");
      return;
    }

    var area = base * height;
    var perimeter = 2 * (base + height);

    document.getElementById("rectangleResult").innerHTML =
      "Área: " + area.toFixed(2) + "<br>Perímetro: " + perimeter.toFixed(2);
  }


  function calculateSquare() {
    var side = parseFloat(document.getElementById("squareSide").value);

    if (isNaN(side)) {
      alert("Por favor, ingresa un número válido para el lado.");
      return;
    }

    var area = side * side;
    var perimeter = 4 * side;

    document.getElementById("squareResult").innerHTML =
      "Área: " + area.toFixed(2) + "<br>Perímetro: " + perimeter.toFixed(2);
  }
  