import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./Courses";
import Account from "./Account";
import Signin from "./Account/Signin";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";

export default function Kanbas() {
    return (
        <div id="wd-kanbas">
            <table>
                <tr>
                    <td valign="top">
                        <KanbasNavigation />
                    </td>
                    <td valign="top">
                        <Routes>
                            <Route path="/" element={<Navigate to="Account" />} />
                            <Route path="/Account/*" element={<Account />} />
                            <Route path="/Dashboard" element={<Dashboard />} />
                            <Route path="/Courses" element={<Dashboard />} />
                            <Route path="/Courses/:cid/*" element={<Courses />} />
                            <Route path="/Calendar" element={<h1>Calendar</h1>} />
                            <Route path="/Inbox" element={<h1>Inbox</h1>} />
                        </Routes>
                    </td>
                </tr>
            </table>
            <div id="wd-github">
                <a href="https://github.com/seanyoo0405/kanbas-react-web-app"
                    id="wd-github" target="_blank">My Github</a><br />
            </div >
            <h2>Name: Sean Yoo</h2>
            <h2>Section: 3:25 - 5:05 T/F </h2>
        </div >

    );
}
