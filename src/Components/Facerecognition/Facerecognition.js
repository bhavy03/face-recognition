import React from "react";

const Facerecognition = ({ imageUrl,box }) => {
    return (
        <div className="center na">
            <div className="absolute mt2">
                <img id="inputImage" src={imageUrl} alt="logo" width='500px' height='auto'/>
                <div className="bounding-box" style={{top: box.toprow, right:box.rightcol,bottom:box.bottomrow,left:box.leftcol}}></div>
            </div>
        </div>
    );
}

export default Facerecognition;