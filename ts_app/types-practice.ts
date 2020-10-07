
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string, string];
// } = {
//     name: 'Mike',
//     age: 26,
//     hobbies: ['sports', 'cooking'], 
//     role: [2, `author`, `friend`]
// }

enum Role { ADMIN = 5, READ_ONLY, AUTHOR };

const person = {
    name: 'Mike',
    age: 26,
    hobbies: ['sports', 'cooking'], 
    role: Role.ADMIN
}

// person.role.push('admin')
// person.role = [2,`friend`,`friend`, `friend`]

let favoriteActivities: string[];
favoriteActivities = ['Sports']


console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

if (person.role === Role.ADMIN) {
    console.log('is admin')
}