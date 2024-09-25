import { Link } from "react-router-dom";
export default function TOC() {
    return (
        <ul>
            <li><Link id="wd-a" to="/Labs">Labs</Link></li>
            <li><Link id="wd-a1" to="/Labs/Lab1">Lab 1</Link></li>
            <li><Link id="wd-a2" to="/Labs/Lab2">Lab 2</Link></li>
            <li><Link id="wd-a3" to="/Labs/Lab3">Lab 3</Link></li>
            <li><Link id="wd-k" to="/Kanbas">Kanbas</Link></li>
            <div id="wd-github">
                <a href="https://github.com/seanyoo0405/kanbas-react-web-app"
                    id="wd-github" target="_blank">My Github</a><br />
            </div >
            <h2>Name: Sean Yoo</h2>
            <h2>Section: 3:25 - 5:05 T/F </h2>
        </ul>
    );
}
