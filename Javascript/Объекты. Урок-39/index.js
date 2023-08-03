let user = {
    name: "John Doe",
    email: "johndoe@gmail.com",
    password: "123456",
    address: "123 Main St",
    phone: '123-456-7890',
    age: 21,
    id: 1,
    role: 'user',
}

for(let key in user){
    document.write(`<div style="display:flex; flex-direction:column; gap:32px; font-size:large; text-align:left;">${key} : ${user[key]}</div>`)
}