import { useContext } from "react";
import AuthContext, { IUserContext } from '../context/AuthProvider';

const useAuth = () => {
	return useContext<IUserContext | null>(AuthContext);
};
export default useAuth;
