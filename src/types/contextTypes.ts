import {User} from "firebase/auth";
import {FC} from "react";

export type GlobalContent = {
  user: User | null;
  isLoading: boolean;
  error: string;
  registerUser:
    | ((email: string, userName: string, password: string) => void)
    | undefined;
  signInUser: ((userName: string, password: string) => void) | undefined;
  logOutUser: (() => void) | undefined;
  forgotPassword: ((email: string) => Promise<void>) | undefined;
};
