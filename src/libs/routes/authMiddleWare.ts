import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { userModel } from '../../repositories/user/UserModel';
import * as bcrypt from 'bcrypt';
import { hasPermission } from '../../libs/permission';
import { permissions } from '../../libs/constant';
import { error } from 'console';
import IRequest from '../IRequest'

export default (moduleName: string, permissionType: string) => (req: IRequest, res: Response, next: NextFunction) => {
    try {
        console.log('The config is : ', moduleName, permissionType);
        console.log('Header is ', req.headers['authorization']);
        const token = req.headers['authorization'];
        const secret = 'qwertyuiopasdfghjklzxcvbnm123456';
        const decodeUser = jwt.verify(token, secret);
        const role = decodeUser.role;
        console.log('User', decodeUser);

        if (hasPermission(permissions.getUsers, role, permissionType)) {
            console.log(`${role} has permission ${permissionType} :true`);
        }
        else {
            next({ error: 'unauthorized', message: 'Permission denied', status: 403 });
        }
        req.user = decodeUser;
        next();




    }

    catch (err) {
        next({
            error: 'Unauthorized',
            code: 403
        });
    }
};




/* token for authorization

eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLC
JpYXQiOjE2MDUwNDgzNjAsImV4cCI6MTYzNjU4NDM2MCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwi
c3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIm5hbWUiOiJUcmFpbmVlIiwiZW1haWwiOiJ0cmFpbmVl
QHN1Y2Nlc3NpdmUudGVjaCIsInJvbGUiOiJ0cmFpbmVlIn0.Qr36ZP6eqgsqUDPrskAmz56-br4yz21mYk0sqKdyr3o

*/



// import * as jwt from 'jsonwebtoken';
// import { hasPermission } from '../permission';
// import { permissions } from '../constant';
// export default (module, permissionType) => (req, res, next) => {
//       try {
//             console.log('The config is:', module, permissionType);
//             console.log('Header is:', req.headers.authorization);
//             const token = req.headers.authorization;
//             const decodeUser = jwt.verify(token, 'qwertyuiopasdfghjklzxcvbnm123456');
//             console.log('user', decodeUser);
//             const nav = decodeUser.Role;
//             hasPermission( permissions.getUsers, nav, permissionType );
//             // let a =decodeUser.req.headers.get("Role");
//             // console.log("jee");
//             // console.log("value of Role: ", token.headers.user.Role);
//             // console.log("hii");
//             next();
//       }
//       catch (err) {
//             next( {
//                   error: 'unauthorized',
//                   code: 403
//             });
//       }
// };