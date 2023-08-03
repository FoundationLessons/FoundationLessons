class Person {
  constructor(name) {
    this.name = name;
  }
}

class Student extends Person {
  constructor(name, surname, section) {
    super(name);
    this.surname = surname;
    this.section = section;
  }

  setName(name) {
    this.name = name;
  }

  setSurname(surname) {
    this.surname = surname;
  }

  setSection(section) {
    this.section = section;
  }

  getName() {
    return this.name;
  }

  getSurname() {
    return this.surname;
  }

  getSection() {
    return this.section;
  }
}

//Вы тут можете либо так сразу всех значений дать и получать просто всех значений
// const student1 = new Student('John', 'Doe', 'Mathematics');

//Либо тут оставить их пустым и дать им значений и потом получить значений которые нужные вам.

const student1 = new Student('', '', '')

student1.setName("John")
student1.setSurname("Wick")
student1.setSection("Neo")

console.log(student1.getName())
console.log(student1.getSurname())
console.log(student1.getSection())
