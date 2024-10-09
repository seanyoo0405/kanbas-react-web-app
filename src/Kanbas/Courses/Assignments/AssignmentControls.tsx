import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { FaSearch } from "react-icons/fa";
export default function AssignmentControls() {
    return (
        <div
            className="container">
            <div className="d-flex align-items-center">
                <input
                    type="text"
                    placeholder="Search"
                    className="form-control"
                    style={{ width: '50%' }}
                />
                <FaSearch style={{ marginLeft: '-25px' }} />

                <div id="wd-modules-controls" className="text-nowrap">
                    <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
                        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                        Assignment</button>
                    <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-1 float-end">
                        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                        Group</button>

                </div>
            </div>
        </div>

    );
}
