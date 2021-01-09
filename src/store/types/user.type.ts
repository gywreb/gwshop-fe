export interface IRegisterUser {
  name: string;
  email: string;
  gender: string;
  password: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface IUserInfo {
  name: string;
  email: string;
  gender: string;
  isActive: string;
  photoUrl?: string;
}
