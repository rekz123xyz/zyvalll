function sayHello() {
  document.querySelector("h1").innerText = "Welcome TOT";
}

function blueMode() {
  document.body.classList.toggle("blue");
}

function buy() {
  alert("Masuk keranjang 🛒");
}

function addTask() {
  let input = document.getElementById("inputTask");
  let list = document.getElementById("list");

  if (input.value === "") return;

  let li = document.createElement("li");
  li.innerText = input.value;

  li.onclick = function() {
    li.remove(); // klik = hapus
  };

  list.appendChild(li);
  input.value = "";
}