import { ILogin, ITokenData, IUser } from '../../interfaces/Index';
import Model from '../../database/models/Users';
import Bcrypt from '../../ultils/Bcrypt';
import JWT from '../../ultils/Jwt';
import GenericError from '../../ultils/GenericError';

export default class Service {
  private model = Model;
  private jwt = new JWT();
  private bcrypt = new Bcrypt();

  login = async (loginData: ILogin) => {
    const userData = await this.model.findOne({ where: { email: loginData.email } });
    if (!userData) throw new GenericError(401, 'Incorrect email or password');
    const { password, role, username, email } = userData as unknown as IUser;

    const isValid = await this.bcrypt.comparePassword(loginData.password, password);
    if (!isValid) {
      throw new GenericError(401, 'Incorrect email or password');
    }
    return this.jwt.generateToken({ role, username, email });
  };

  validate = async (token: string) => {
    const isValid = this.jwt.validateToken(token);
    const { data: { role } } = isValid as ITokenData;
    return { role };
  };
}
