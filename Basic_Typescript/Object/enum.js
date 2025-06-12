// ! Enums -----------> in TypeScript are commonly used when you want to represent a set of related values and choose one value from multiple options. 
var Role;
(function (Role) {
    Role["user"] = "user";
    Role["admin"] = "admin";
})(Role || (Role = {}));
var user1 = {
    email: 'test@gmail.com',
    password: "1234",
    role: Role.admin
};
var user2 = {
    email: 'xyz@gmail.com',
    password: "5678",
    role: Role.user
};
var isAdmin = function (user) {
    return user.role === 'admin' ? "".concat(user.email, " is an allowed to change ") : "".concat(user.email, " is not allowed to change ");
};
console.log(isAdmin(user1));
console.log(isAdmin(user2));
