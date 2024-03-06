const users =[
    { name: "John", email: "john@gmail.com", age: 30, gender: "male" },
    { name: "Anna", email: "anna@gmail.com", age: 23, gender: "female"},
    { name: "Alex", email: "alex@gmail.com", age: 35, gender: "male" },
]

for (const person of users) {
    console.log(`${person.name} who is ${person.gender} and he/she is ${person.age} years old and has ${person.email} `)
}

for (const { name, email, age, gender } of users) {
    console.log(`${name} who is ${gender} and he/she is ${age} years old and has ${email}`);
}
