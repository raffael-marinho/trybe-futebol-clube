import * as bcrypt from 'bcryptjs';

export default class Bcrypt {
  private saltRounds = 10;

  generatePassword = async (password: string) => {
    const salt = await bcrypt.genSalt(this.saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  };

  comparePassword = async (password:string, encrypted: string) => {
    const isPassword = await bcrypt.compare(password, encrypted);
    return isPassword;
  };
}