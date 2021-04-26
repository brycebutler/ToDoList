document.getElementById("addBtn").addEventListener("click", addText);

function addText(){
  var listItem = document.createElement("li");
listItem.innerText = document.getElementById("myInput").value;
  document.getElementById("myU1").appendChild(listItem);
  var button =document.createElement("button");
  button.innerText = "x";
  listItem.appendChild(button);
}
