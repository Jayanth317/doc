import React, { useState } from "react";
import './resume.module.css';
const Resume = () => {
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = ()  => {
        setIsHovering(true);
    };
    const handleMouseOut = () => {
        setIsHovering(false);
    };
    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('72192.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = '72192.pdf';
                alink.click();
            })
        })
    }
    return (
        <>
            <center>
                <h1>Welcome to my React Website</h1>
                <h3>Click on below button to PDF file of my Resume</h3>
                <div onMouseOver={handleMouseOver} onMouseOut = {handleMouseOut}>
                <button onClick={onButtonClick}>
                    Download PDF
                </button>
                {isHovering && <box>download now</box>}
                </div>
            </center>
        </>
    );
};
  
export default Resume;

// function submitPoll(id){
//     document.getElementById("votebutton").disabled = true;
//     setTimeout(function(){document.getElementById("votebutton").disabled = false;},5000);
// }