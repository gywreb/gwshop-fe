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
  _id: string;
  name: string;
  email: string;
  gender: string;
  isActive: string;
  createdAt: string;
  updatedAt: string;
  photoUrl?: string | null;
}
