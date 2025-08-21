import { add } from "./calc.js";

function onReady() {
  const form = document.getElementById("calc-form");
  const a = document.getElementById("a");
  const b = document.getElementById("b");
  const result = document.getElementById("result");

function multiply() {
  const a = parseFloat(document.getElementById('a2').value);
  const b = parseFloat(document.getElementById('b2').value);
  const result = a * b;
  document.getElementById('result2').innerText = isNaN(result) ? 'Ошибка' : result;
}

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    try {
      const sum = add(a.value, b.value);
      result.textContent = `Результат: ${sum}`;
    } catch (err) {
      result.textContent = `Ошибка: ${err.message}`;
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", onReady);
} else {
  onReady();
}