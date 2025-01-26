import { useLocation, Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks";
import { roles } from "../context/AuthProvider";
import { useEffect } from "react";

interface IProps {
    role: roles[];
}

const RequireAuth = (props: IProps) => {
    const { auth } = useAuth()!;
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (auth === undefined) {
            navigate("/login");
            return;
        }
        if (location.pathname === "/") {
            switch (auth.decoded.role) {
                case "REGULAR":
                case "FULL":
                    break;
                case "REGISTER":
                    navigate("/register");
                    break;
                case "PASSWORD":
                    navigate("/password");
                    break;
                default:
                    navigate("/*");
                    break;
            }
        }
    }, [auth, location, navigate]);

    if (auth === undefined) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    } else {
        return props.role.includes(auth!.decoded.role) ? (
            <Outlet />
        ) : (
            <Navigate to="*" state={{ from: location }} replace />
        );
    }
};
export default RequireAuth;
