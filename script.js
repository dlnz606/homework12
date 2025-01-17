const shapeContainer = document.getElementById("shape-container");
let currentShape = null;

document.getElementById("circle-btn").addEventListener("click", () => {
  createShape("circle");
});

document.getElementById("square-btn").addEventListener("click", () => {
  createShape("square");
});

document.querySelectorAll("[data-color]").forEach((button) => {
  button.addEventListener("click", (e) => {
    if (currentShape) {
      currentShape.style.backgroundColor = e.target.getAttribute("data-color");
    } else {
      alert("Выберите фигуру.");
    }
  });
});

document.getElementById("add-text-btn").addEventListener("click", () => {
  const text = document.getElementById("text-input").value.trim();
  if (currentShape) {
    if (text) {
      currentShape.textContent = text;
    } else {
      alert("Ошибка. Введите текст.");
    }
  } else {
    alert("Выберите фигуру.");
  }
});

document.getElementById("clear-btn").addEventListener("click", () => {
  shapeContainer.innerHTML = "";
  currentShape = null;
});

function createShape(type) {
  shapeContainer.innerHTML = "";
  const shape = document.createElement("div");
  shape.className = `shape ${type}`;
  shape.style.backgroundColor = "#ccc";
  currentShape = shape;
  shapeContainer.appendChild(shape);
}
