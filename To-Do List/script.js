const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("task-container");
const errorMessage = document.getElementById("error-message");

function addTask() {
  // Si aucune valeur n'est entrée, afficher un message d'erreur
  if (inputBox.value === "") {
    errorMessage.innerText = "You must write something !";
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    errorMessage.innerText = "";
  }
  inputBox.value = "";
  saveData();
}

// Si du texte est saisi, effacer le message d'erreur
inputBox.addEventListener("input", function () {
  if (inputBox.value.trim() !== "") {
    errorMessage.innerText = "";
  }
});

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
