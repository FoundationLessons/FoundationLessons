const date = new Date('2012-02-20T03:12:00');


const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();

console.log(`Дата: ${day}, Месяц: ${month}, Год: ${year}, Время: ${hours}:${minutes}`);
document.write(`Дата: ${day}, Месяц: ${month}, Год: ${year}, Время: ${hours}:${minutes}`);
