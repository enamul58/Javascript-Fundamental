const elementList = document.forms["form-1"];

let singleElement = "";

for (let x = 0; x < elementList.length; x++) {
  singleElement += elementList.elements[x].value + "<br>";
}

document.getElementById("output").innerHTML = singleElement;
