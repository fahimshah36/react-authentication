export interface ILoginFormType {
  username: string;
  password: string;
}
export interface ISignupFormType extends ILoginFormType {
  email: string;
}
