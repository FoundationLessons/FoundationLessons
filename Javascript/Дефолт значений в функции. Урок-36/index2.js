let isConfirmed = (age) => {
    
  age = confirm("Вам есть 18?");
  if (age === true) {
    document.write(`<h1>Вам есть 18 и можете учится в Университете</h1>`)
  } else {
    document.write(`<h1>Вам нету 18 и не можете учится в Университете</h1>`)
  }
};

isConfirmed();
