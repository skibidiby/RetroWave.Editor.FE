import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import {
    Home,
    NotFound,
} from "../screens";
import RequireAuth from "./RequireAuth";
const Navigation = () => {
    return (
        <div >
            <Router>
                <>
                    <Routes>
                        {/* Protected Routes */}
                        <Route element={<RequireAuth role={["FULL", "REGULAR"]} />}>
                            <Route path="/" element={<Home />} />

                        </Route>
                        {/* Unprotected Routes */}
                        {/* <Route path="/password" element={<PasswordAfterReset />} />
								<Route path="/login" element={<LogIn />} />
								<Route path="/logout" element={<Logout />} /> */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </>
            </Router>
        </div>
    );
};

export default Navigation;
