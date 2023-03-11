import {createContext, useContext, useEffect, useState} from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User,
} from "firebase/auth";
import {auth} from "../../firebase/index";
import {GlobalContent} from "../../types/contextTypes";

const UserContext = createContext<GlobalContent>({} as GlobalContent);

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      res ? setUser(res) : setUser(null);
      setError("");
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  //all functions here
  const registerUser = (email: string, userName: string, password: string) => {
    console.log({email, userName, password});

    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        return updateProfile(auth.currentUser as User, {displayName: userName});
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setIsLoading(false));
  };

  const signInUser = (userName: string, password: string) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, userName, password)
      .then(() => {
        return updateProfile(auth.currentUser as User, {displayName: userName});
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setIsLoading(false));
  };

  const logOutUser = () => {
    signOut(auth);
  };

  const forgotPassword = (email: string) => {
    return sendPasswordResetEmail(auth, email);
  };

  const contextValue = {
    user,
    isLoading,
    error,
    registerUser,
    signInUser,
    logOutUser,
    forgotPassword,
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
