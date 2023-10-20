// ! Enums -----------> in TypeScript are commonly used when you want to represent a set of related values and choose one value from multiple options. 

enum Role  {
  user = "user",
  admin = "admin"
}
type loginDetails = {
    email : string;
    password : string ;
    role : Role;
}

const user1 : loginDetails = {
    email: 'test@gmail.com',
    password : "1234",
    role : Role.admin
}

const user2 : loginDetails = {
    email : 'xyz@gmail.com',
    password : "5678",
    role : Role.user
}

const isAdmin = ( user: loginDetails) => {
    return user.role === 'admin'? `${user.email} is an allowed to change ` : `${user.email} is not allowed to change `
}

console.log(isAdmin(user1));
console.log(isAdmin(user2));