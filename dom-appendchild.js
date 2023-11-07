// For Insert list item inside unordered list
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

//For Edit list item inside unordered list
// approch-01
const secondLang = document.querySelector("li:nth-child(2)");
const li = document.createElement("li");
li.innerHTML = "golang";
secondLang.replaceWith(li);

//approch-02
const firstLang = document.querySelector("li:first-child");
firstLang.outerHTML = "<li>TypeScript</li>";
