
//how to refactor this code

//private,public,protected

//Level -0 : without refactoring
// class User {
//     userId: string = "00A12"
//     userName: string = "userName"
//     status: boolean = false
//     constructor(userId: string, userName: string, status: boolean) {
//         this.userId = userId
//         this.userName = userName
//         this.status = status
//     }
// }

//level -1 : we can remove variable declaration inside class
// class User {
//instance variables
// userId: string = "00A12"
// userName: string = "userName"
// status: boolean = false

//constructor args : userId,userName,status: local variables

/**
 * 
 * constructor arg Local variables  can be converted into instance variables so that we can reduce code?
 *  how to convert?
 *    you can add "private/public " keyword in the constructor arg declaration
 */

//     constructor(public userId: string, public userName: string, public status: boolean) {
//         this.userId = userId
//         this.userName = userName
//         this.status = status
//     }
// }

//level -2 : we can remove variable initalization inside constructor, 
//the reason is both are same
class User {
    constructor(public userId: string, public userName: string, public status: boolean) { }
}

/////////////////////////////////////////////////////////////////////////////////////
class UserService {
    findAll() {
        return "users"
    }
}

// class UserComponent {
//     //has-a relationship :Dependency injection
//     userService: UserService
//     constructor(userService: UserService) {
//         this.userService = userService
//     }
// }
class UserComponent {
    //has-a relationship :Dependency injection
    // userService: UserService
    constructor(private userService: UserService) { }

    //api of component
    findAll() {
        return this.userService.findAll()
    }
}

class HeroService {
    constructor() { }
    getHeroes() {
        return [{ id: 1, name: 'JamesBond' }, { id: 2, name: 'John Tailer' }]
    }
}

class HeroComponent {
    constructor(private heroService: HeroService) { }
    init() {
        this.heroService.getHeroes().forEach(hero => console.log(hero))
    }
}

function main() {
    let user = new User("100A2", "Subramanian", true)
    console.log(user.userId, user.userName, user.status)
    let userService = new UserService()
    let userComponent = new UserComponent(userService);
    console.log(user, userComponent)
    console.log(userComponent.findAll())
    //
    let heroComponent = new HeroComponent(new HeroService())
    heroComponent.init()
}
main()