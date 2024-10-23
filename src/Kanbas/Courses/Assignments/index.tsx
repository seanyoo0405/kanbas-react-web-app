import { BsGripVertical } from "react-icons/bs";
import { BsClipboard2Check } from "react-icons/bs";
import AssignmentButtons from "./AssignmentButtons";
import SubassignmentButtons from "./SubassignmentButtons";
import AssignmentControls from "./AssignmentControls";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Assignments() {
    const assignments = db.assignments;
    const { cid } = useParams();
    return (
        <div>
            <AssignmentControls /><br /><br /><br /><br />
            <ul id="wd-modules" className="list-group rounded-0">
                <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS
                        <AssignmentButtons />
                    </div>
                    <ul className="wd-subassignment list-group rounded-0">
                    {assignments
          .filter((assignments) => assignments.course === cid)
          .map((assignments) => (
                        <li className="wd-subassignment list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <BsClipboard2Check className="s"/>
                            <a className="wd-assignment-link"
                                href="#/Kanbas/Courses/1234/Assignments/123">
                                {assignments.title}
                            </a>
                            <div className="wd-assignment-description"> Multiple Modules | Not available until {assignments.available} |</div>
                            <div className="wd-assignment-description"> Due {assignments.due} | {assignments.points} pts </div>
                            <SubassignmentButtons />
                        </li>
                        ))}                        
                    </ul>
                </li>
            </ul> </div>
    );
}