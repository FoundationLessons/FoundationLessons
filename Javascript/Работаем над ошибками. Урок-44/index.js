function divide(num1, num2) {
  // Проверяем, являются ли входные значения числами
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error("Twice of them should be a number");
  }

  // Проверяем, не является ли num2 равным нулю
  if (num2 === 0) {
    throw new Error("Деление на ноль недопустимо");
  }

  // Выполняем деление и возвращаем результат
  return num1 / num2;
}

try {
  const result = divide(10, 2);
  console.log(result); // Выведет: 5
} catch (error) {
  console.error(error.message);
}

try {
  const result = divide("10", 2); // Неверный тип
  console.log(result);
} catch (error) {
  console.error(error.message); // Выведет: "Обе переменные должны быть числами"
}

try {
  const result = divide(10, 0); // Деление на ноль
  console.log(result);
} catch (error) {
  console.error(error.message); // Выведет: "Деление на ноль недопустимо"
}
