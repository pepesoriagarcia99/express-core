// import UserService from "./user.service";
const { default: UserService } = require("./user.service");

@Controller('/user') // ! Tercero se aplican los decoradores de class
class UserController {

    @Inject(UserService) // ! Primero se aplican los decoradores de field
    #service;


    @Get('/list') // ! Segundo se aplican los decoradores de method
    @Middleware(protect(['user']))  // !! Orden de los decoradores es de arriba a bajo
    userList(req, res, next) {
        // this.#service.userList();

        const list = [
            {
                id: 1
            }
        ]

        // res.serverError().json({errorType : 'no name');
        // res.serverError()

        // res.success(201).json(list);
        res.success().json(list);
        res.success().xml(list);
    }
}

export default UserController;
