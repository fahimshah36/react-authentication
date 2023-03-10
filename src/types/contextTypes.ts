import {User} from "firebase/auth";

export type GlobalContent = {
  user: User | null;
  isLoading: boolean;
  error: string;
};
