//how to refactor this code
class User {
    constructor(userId, userName, status) {
        this.userId = "00A12";
        this.userName = "userName";
        this.status = false;
        this.userId = userId;
        this.userName = userName;
        this.status = status;
    }
}
class UserService {
    findAll() {
        return "findAll";
    }
}
class UserComponent {
    constructor(userService) {
        this.userService = userService;
    }
}
function main() {
    let user = new User("100A2", "Subramanian", true);
    let userService = new UserService();
    let userComponent = new UserComponent(userService);
    console.log(user, userComponent);
}
main();
