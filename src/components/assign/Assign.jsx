import React from "react";
import "./assign.css";

const Assign = () => {
    return (
        <div className="assignments">
            Hello World
            <iframe 
                src="https://drive.google.com/drive/folders/1S_5G11EgjGBqxyy_oBb7OrOfzV6s7NA-" 
                title="Google Drive Assignments" // Add a descriptive title here
                style={{ width: '100%', height: '500px', border: 'none' }} // Optional: Add styles for better presentation
            ></iframe>
        </div>
    );
};

export default Assign;
