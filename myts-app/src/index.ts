
//how to refactor this code

class User {
    userId: string = "00A12"
    userName: string = "userName"
    status: boolean = false
    constructor(userId: string, userName: string, status: boolean) {
        this.userId = userId
        this.userName = userName
        this.status = status
    }
}

class UserService {
    findAll() {
        return "findAll"
    }
}

class UserComponent {
    //has-a relationship :Dependency injection
    userService: UserService
    constructor(userService: UserService) {
        this.userService = userService
    }
}

function main() {
    let user = new User("100A2", "Subramanian", true)
    let userService = new UserService()
    let userComponent = new UserComponent(userService);
    console.log(user,userComponent)
}
main()