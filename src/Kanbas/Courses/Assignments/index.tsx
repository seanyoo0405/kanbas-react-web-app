import { BsGripVertical } from "react-icons/bs";
import { BsClipboard2Check } from "react-icons/bs";
import AssignmentButtons from "./AssignmentButtons";
import SubassignmentButtons from "./SubassignmentButtons";
import AssignmentControls from "./AssignmentControls";

export default function Assignments() {
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
                        <li className="wd-subassignment list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <BsClipboard2Check className="s"/>
                            <a className="wd-assignment-link"
                                href="#/Kanbas/Courses/1234/Assignments/123">
                                A1 - ENV + HTML
                            </a>
                            <div className="wd-assignment-description"> Multiple Modules | Not available until May 6 at 12:00am |</div>
                            <div className="wd-assignment-description"> Due May 13 at 11:59pm | 100pts </div>
                            <SubassignmentButtons />
                        </li>
                        <li className="wd-subassignment list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <BsClipboard2Check className="s"/>
                            <a className="wd-assignment-link"
                                href="#/Kanbas/Courses/1234/Assignments/124">
                                A2 - CSS + BOOTSTRAP
                            </a>
                            <div className="wd-assignment-description"> Multiple Modules | Not available until May 13 at 12:00am |</div>
                            <div className="wd-assignment-description"> Due May 20 at 11:59pm | 100pts </div>
                            <SubassignmentButtons /></li>
                        <li className="wd-subassignment list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <BsClipboard2Check className="s"/>
                            <a className="wd-assignment-link"
                                href="#/Kanbas/Courses/1234/Assignments/125">
                                A3 - JAVASCRIPT + REACT
                            </a>
                            <div className="wd-assignment-description"> Multiple Modules | Not available until May 20 at 12:00am |</div>
                            <div className="wd-assignment-description"> Due May 27 at 11:59pm | 100pts </div>
                            <SubassignmentButtons /></li>
                    </ul>
                </li>
            </ul> </div>
    );
}

{/* <div id="wd-assignments">
       <input id="wd-search-assignment"
    //            placeholder="Search for Assignments" />
    //     <button id="wd-add-assignment-group">+ Group</button>
    //     <button id="wd-add-assignment">+ Assignment</button>
    //     <h3 id="wd-assignments-title">
    //       ASSIGNMENTS 40% of Total <button>+</button>
    //     </h3>
    //     <ul id="wd-assignment-list">
    //       <li className="wd-assignment-list-item">
    //         <a className="wd-assignment-link"
    //           href="#/Kanbas/Courses/1234/Assignments/123">
    //           A1 - ENV + HTML
    //         </a>
    //         <div className= "wd-assignment-description"> Multiple Modules | Not available until May 6 at 12:00am |</div>
    //         <div className= "wd-assignment-description"> Due May 13 at 11:59pm | 100pts </div>  
    //       </li>
    //       <li className="wd-assignment-list-item">
    //       <a className="wd-assignment-link"
    //           href="#/Kanbas/Courses/1234/Assignments/124">
    //           A2 - CSS + BOOTSTRAP
    //         </a>
    //         <div className= "wd-assignment-description"> Multiple Modules | Not available until May 13 at 12:00am |</div>
    //         <div className= "wd-assignment-description"> Due May 20 at 11:59pm | 100pts </div>
    //       </li>
    //       <li className="wd-assignment-list-item">
    //       <a className="wd-assignment-link"
    //           href="#/Kanbas/Courses/1234/Assignments/125">
    //           A3 - JAVASCRIPT + REACT
    //         </a>
    //         <div className= "wd-assignment-description"> Multiple Modules | Not available until May 20 at 12:00am |</div>
    //         <div className= "wd-assignment-description"> Due May 27 at 11:59pm | 100pts </div>
    //       </li>
    //     </ul>
    //   </div> */}

