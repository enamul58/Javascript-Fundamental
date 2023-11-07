// approach-01
function addListItem(language) {
  let li = document.createElement("li");
  li.innerHTML = `${language}`;
  document.querySelector(".language").appendChild(li);
}

addListItem("PHP");

//approch-02
function addListItemOptimizeWay(language) {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(language));
  document.querySelector(".language").appendChild(li);
}

addListItemOptimizeWay("C");
