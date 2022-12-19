import { UserService } from "../../services/userServices.js/userService";

class UserControllerClass {
    async registrationHandler(req, res) {
        const user = await UserService.registration(req, res);
        
        if (!user) {
            return
        }
        return res.status(201).send(user)
    }


    async loginHandler (req, res) {
        const tokens = await UserService.login(req, res);

        if (!tokens) {
            return
        }
        res.cookie('refreshToken', tokens.refreshToken, { maxAge: 3 * 24 * 60 * 60 * 1000, httpOnly: true });
        
        return res.status(200).json({ messages: 'all good', tokens })
    }

    async logoutHandler (req, res) {
        const isSuccessfulLogout = await UserService.logout(req, res);

        if (!isSuccessfulLogout) {
            return
        }
        
        res.clearCookie('refreshToken');

        return res.status(200).json({message: 'Logged out'});
    }

}

export const UserController = new UserControllerClass();