export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
                The assignment is available online Submit a link to the landing page of
            </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option selected value="ASSIGNMENTS">
                                ASSIGNMENTS</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option selected value="Percentage">
                                Percentage</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option selected value="Online">
                                Online</option>
                        </select>
                    </td>
                </tr>
                <label>Online Entry Options:</label><br />

                <input type="checkbox" name="check-option" id="wd-text-entry" />
                <label htmlFor="wd-text-entry">Text Entry</label><br />

                <input type="checkbox" name="check-option" id="wd-website-url" />
                <label htmlFor="wd-website-url">Website URL</label><br />

                <input type="checkbox" name="check-option" id="wd-media-recordings" />
                <label htmlFor="wd-media-recordings">Media Recordings</label><br />

                <input type="checkbox" name="check-option" id="wd-student-annotation" />
                <label htmlFor="wd-student-annotation">Student Annotation</label>

                <div><input type="checkbox" name="check-option" id="wd-file-upload" />
                    <label htmlFor="wd-file-upload">File Upload</label></div>

                <label htmlFor="wd-assign-to">Assign to</label>
                <input id="wd-assign-to" placeholder="Everyone" /> <br />

                <label htmlFor="wd-text-fields-dob"> Due </label> <br />
                <input type="date"
                    id="wd-due-date"
                    value="05/13/2024" /><br />

                <label htmlFor="wd-text-fields-dob"> Available from </label> <br />
                <input type="date"
                    id="wd-available-from"
                    value="05/06/2024" /><br />

                <label htmlFor="wd-text-fields-dob"> Until </label> <br />
                <input type="date"
                    id="wd-available-until"
                    value="05/20/2024" /><br />

            </table>
        </div>
    );
}