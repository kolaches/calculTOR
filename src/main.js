import { add } from "./calc.js";

function onReady() {
  const form = document.getElementById("calc-form");
  const a = document.getElementById("a");
  const b = document.getElementById("b");
  const result = document.getElementById("result");

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