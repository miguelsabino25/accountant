const count = document.querySelector("button");
const res = document.getElementById("res");
const start = document.getElementById("start");
const end = document.getElementById("end");
const step = document.getElementById("step");
const result = document.getElementById("result");

function accountant() {
  const startNumber = Number(start.value);
  const endNumber = Number(end.value);
  const stepNumber = Number(step.value);
  const paragraph = document.createElement("p");
  res.innerHTML = "";

  if (
    start.value.length == 0 ||
    end.value.length == 0 ||
    step.value.length == 0
  ) {
    alert("Digite um valor");
  } else if (startNumber > endNumber || stepNumber > endNumber) {
    alert(
      "O valor inicial não pode ser maior que o valor final e os passos não podem ser maiores que o valor final."
    );
  } else {
    let counter = startNumber;
    for (let index = startNumber; index < endNumber; index += stepNumber) {
      result.innerHTML = "";
      paragraph.innerHTML += `${counter} &#128073;&#127996;`;
      res.appendChild(paragraph);
      counter += stepNumber;
    }
    paragraph.innerHTML += "&#9989";
    localStorage.setItem("countt", paragraph.innerHTML);
  }
}

count.addEventListener("click", () => {
  accountant();

  start.value = "";
  end.value = "";
  step.value = "";
});

window.addEventListener("load", () => {
  const saveCount = localStorage.getItem("countt");
  if (saveCount) {
    res.innerHTML = saveCount;
  }
});
