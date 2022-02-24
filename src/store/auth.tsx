import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  ReactNode,
} from "react";
import { hideAsync } from "expo-splash-screen";

import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface User {
  id: string;
  name: string;
  email: string;
  hasConfirmedRegulation: boolean;
}

interface InitialState {
  signed: boolean;
  currentUser: User;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp(email: string, password: string): Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext({} as InitialState);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loading, setLoading] = useState(true);

  const [currentUser, setCurrentUser] = useState<User>(null);

  async function signIn(email: string, password: string) {
    try {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(async ({ user }) => {
          const signedUser = {
            ...currentUser,
            id: user.uid,
            email: user.email,
            name: user.displayName,
            hasConfirmedRegulation: true,
          };
          setCurrentUser(signedUser);

          await AsyncStorage.setItem("@user", JSON.stringify(signedUser));
        });
    } catch (error) {
      console.log("error", error);
    }
  }

  async function signInWithGoogle() {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signIn();
    } catch (error) {
      console.log(error);
    }
  }

  async function signUp(email: string, password: string) {
    const { createUserWithEmailAndPassword } = auth();
    const { user } = await createUserWithEmailAndPassword(email, password);
    //get all information about the user

    //use email and password of this data to signup with firebase

    //set state in user data

    //async storage the data

    //save the data in firestorage
    firestore()
      .collection("users")
      .add({
        id: user.uid,
        email: user.email,
        name: user.displayName,
        hasConfirmedRegulation: true,
      })
      .then(() => console.log("user saved"));
  }

  async function signOut() {
    await auth().signOut();
    await AsyncStorage.clear().then(() => setCurrentUser(null));
  }

  useEffect(() => {
    const loadStoragedUser = async () => {
      const storagedUser = await JSON.parse(
        await AsyncStorage.getItem("@user")
      );

      if (storagedUser) {
        setCurrentUser(storagedUser);
        setLoading(false);
        hideAsync();
      }
    };

    setTimeout(() => {
      loadStoragedUser();
    }, 3000);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        loading,
        signed: !!currentUser,
        signIn,
        signInWithGoogle,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
