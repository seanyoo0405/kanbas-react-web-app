import { Navigate, Route, Routes } from "react-router";
import Profile from "./Profile";
import Signin from "./Signin";
import Signup from "./Signup";
import AccountNavigation from "./Navigation";
export default function Account() {
  return (
    <div>
      <h2>Account</h2>
      <table>
        <tr>
          <td valign="top">
            <AccountNavigation />
          </td>
          <td valign="top">
            <Routes>
              <Route
                path="/"
                element={<Navigate to="/Kanbas/Account/Signin" />}
              />
              <Route path="/Signin" element={<Signin />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Signup" element={<Signup />} />
            </Routes>
          </td>
        </tr>
        https://github.com/seanyoo0405/kanbas-react-web-app/tree/a3 <br></br>
        I lost a lot of my work becaused i messed up while trying to merge my code 
        between branches <br></br>
        so some parts might be different from last assignment
      </table>
    </div>
  );
}