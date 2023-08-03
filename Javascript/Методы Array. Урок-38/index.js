let plusArray = () => {

  let numbers = [];
  let sum = 0;

  while (true) {
    const input = prompt("Type here numbers");

    //trim() - уберет пустых пробелов то есть тут если просто ок нажать то программа остановится просто указывая 0
    if (input === null || input.trim() === "") {
      break;
    }

    //Можете просто Number() использовать это чтобы если 9,2 было = 9
    const number = parseFloat(input);

    if (isNaN(number)) {
      alert("You typed wrong number type again");
      continue;
    }

    numbers.push(number);
    sum += number;
  }
  alert(`Result is : ${sum}`)
};



plusArray();
