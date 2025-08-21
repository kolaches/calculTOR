import { add } from "./calc.js";

function multiply(a, b) {
  return a * b;
}

function onReady() {
  const form = document.getElementById("calc-form");
  const a = document.getElementById("a");
  const b = document.getElementById("b");
  const result = document.getElementById("result");

  // элементы второго калькулятора
  const a2 = document.getElementById('a2');
  const b2 = document.getElementById('b2');
  const multiplyBtn = document.getElementById('multiply-btn');
  const result2 = document.getElementById('result2');

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    try {
      const sum = add(parseFloat(a.value), parseFloat(b.value));
      result.textContent = `Результат: ${sum}`;
    } catch (err) {
      result.textContent = `Ошибка: ${err.message}`;
    }
  });

  multiplyBtn.addEventListener('click', () => {
    const valA = parseFloat(a2.value);
    const valB = parseFloat(b2.value);
    if (isNaN(valA) || isNaN(valB)) {
      result2.textContent = 'Ошибка';
      return;
    }
    const product = multiply(valA, valB);
    result2.textContent = product;
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", onReady);
} else {
  onReady();
}
