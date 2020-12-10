import * as bcrypt from 'bcrypt';


export const createHashPassword = password => bcrypt.hashSync(password, 10);

export const compareHashPassword = (password, dbpassword) => bcrypt.compareSync(password, dbpassword)

