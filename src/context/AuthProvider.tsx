import { jwtDecode } from "jwt-decode";
import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

export type roles = "REGISTER" | "FULL" | "REGULAR" | "PASSWORD";

export interface IDecodedToken {
    exp: number;
    iat: number;
    name: string;
    nbf: number;
    role: roles;
}
export interface IUser {
    expireToken: string;
    decoded: IDecodedToken;
}
export type IUserContext = {
    auth: IUser | undefined;
    setAuth: Dispatch<SetStateAction<IUser | undefined>>;
};

const AuthContext = createContext<IUserContext | null>(null);
export const AuthProvider = ({ children }: { children?: ReactNode }) => {
    const [auth, setAuth] = useState<IUser>();
    //If the Expire Token is missing in the context check for it in the Local Storage
    if (!auth?.expireToken && localStorage.getItem("expireToken") != null) {
        const expireToken = localStorage.getItem("expireToken")!;
        const decoded = jwtDecode<IDecodedToken>(expireToken);
        setAuth({
            expireToken: localStorage.getItem("expireToken")!,
            decoded: decoded,
        });
    }
    return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};
AuthContext.displayName = "AuthContext";
AuthProvider.displayName = "AuthProvider";

export default AuthContext;