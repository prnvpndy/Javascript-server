import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { hasPermission } from "../../libs/permission";
import IRequest from "../IRequest";
import UserRepository from "../../repositories/user/UserRepository";
import config from "../../config/configuration";
import { permissions } from "../../libs/constant";

export default (moduleName: string, permissionType: string) => (req: IRequest, res: Response, next: NextFunction) => {
    try {

        console.log("::::::::::::INSIDE AUTHMIDDLEWARE::::::::::::");
        const token = req.headers['authorization'];
        const secret = config.secretKey;
        async function verifyUser() {
            const decodeUser = await jwt.verify(token, secret);
            return decodeUser;
        }

        verifyUser().then((result) => {
            if (result) {
                const role = result.data.role;
                console.log("role is ", role, result.data['email'])
                const userRepository: UserRepository = new UserRepository();
                userRepository.find({ email: result.data['email'], originalId: result.data['id'], deletedAt: null })
                    .then((result1) => {
                        if (!result1) {

                            console.log("user does not exist ");
                            res.send({
                                status: 404,
                                message: "user does not exist",
                                data: result1
                            });
                        }
                        else {
                            if (hasPermission(permissions.getUsers, role, permissionType)) {
                                console.log(`${role} has permission ${permissionType} :true`);
                                req.user = result.result;
                                next(); 
                            }
                            else {
                                next({
                                    status: 403,
                                    error: "Unauthorized",
                                    message: "Permission denied",
                                });
                            }
                        }
                    })
                    .catch((err) => { console.log(err) });
            }
            else {
                console.log("Has problem in token");
            }
        })
            .catch((err) => {
                console.log("Error : ", err);
            })
    }

    catch (err) {
        next({
            error: "Unauthorized",
            code: 403
        })
    }
}
