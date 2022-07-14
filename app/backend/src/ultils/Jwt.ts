import { sign, verify } from 'jsonwebtoken';
import { IJWT, ITokenData } from '../interfaces/Index';

export default class JWT {
  private jwtSecret = 'jwt_secret';

  generateToken(user: IJWT): string {
    const { jwtSecret } = this;
    const token = sign({ data: user }, jwtSecret, {
      expiresIn: '2000d',
      algorithm: 'HS256',
    });
    return token;
  }

  validateToken(token: string): ITokenData | null {
    try {
      const { jwtSecret } = this;
      const result = verify(token, jwtSecret);
      return result as ITokenData;
    } catch (error) {
      return null;
    }
  }
}