export interface ILoginFormType {
  email: string;
  password: string;
}

export interface ISignupFormType extends ILoginFormType {
  username: string;
}

export interface IForgetPassword extends ISignupFormType {}
